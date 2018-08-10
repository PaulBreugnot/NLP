import os
import sqlite3 as sql
import resources.pyfreeling as freeling
from loacore.conf import DB_PATH
from loacore.classes.classes import DepTree
from loacore.classes.classes import DepTreeNode


def add_dep_tree_from_sentences(sentences, print_result=False):
    """
    Generates the dependency trees of the specified sentences and add the results to the
    database.\n
    Sentences are firstly converted into "raw" Freeling sentences (without any analysis) and then all the necessary
    Freeling processes are performed.\n
    The PoS_tag of words are also computed and added to the database in this function.\n

    .. note:: This function should be used only inside the :func:`file_process.add_files()` function.

    .. note:: This process can be quite long. (at least a few minutes)

    :param sentences: Sentences to process
    :type sentences: :obj:`list` of |Sentence|
    :param print_result: Print PoS_tags and labels associated to each |Word|
    :type print_result: boolean
    """
    print("Loading Freeling Modules...")
    morfo, tagger, sen, wsd, parser = init_freeling()

    freeling_sentences = [sentence.compute_freeling_sentence() for sentence in sentences]

    print("Morphosyntactic analysis and tagging...")
    # perform morphosyntactic analysis and disambiguation
    freeling_sentences = morfo.analyze(freeling_sentences)
    freeling_sentences = tagger.analyze(freeling_sentences)

    print("Disambiguation...")
    # annotate and disambiguate senses
    freeling_sentences = sen.analyze(freeling_sentences)
    freeling_sentences = wsd.analyze(freeling_sentences)

    print("Dependency tree parsing...")
    # parse sentences
    end = len(freeling_sentences)
    disambiguated_sentences = []
    for i in range(end):
        print("\r" + str(i) + " / " + str(end) + " sentences processed.", end='')
        disambiguated_sentences.append(parser.analyze(freeling_sentences[i]))

    print('\r' + str(end) + " / " + str(end) + " sentences processed.")

    freeling_sentences = disambiguated_sentences

    conn = sql.connect(DB_PATH, timeout=60)
    c = conn.cursor()

    progress = 0
    end = len(sentences)
    for s in range(len(sentences)):
        progress += 1
        if progress == end:
            print('\r' + str(progress) + " / " + str(end) + " sentences added.")
        else:
            print('\r' + str(progress) + " / " + str(end) + " sentences added.", end='')
        sentence = sentences[s]

        # Add dep_tree to database
        dt = freeling_sentences[s].get_dep_tree()
        dep_tree = DepTree(None, None, sentence.id_sentence)

        c.execute("INSERT INTO Dep_Tree (ID_Sentence) VALUES (?)", [dep_tree.id_sentence])
        conn.commit()

        # Get back id_dep_tree
        c.execute("SELECT last_insert_rowid()")
        id_dep_tree = c.fetchone()[0]
        dep_tree.id_dep_tree = id_dep_tree

        # Database process
        root = None
        if not len(sentence.words) == len(freeling_sentences[s]):
            print("/!\\ Warning, sentence offset error in deptree_process /!\\")
            print(sentence.sentence_str())
            print([w.get_form() for w in freeling_sentences[s]])

        for w in range(len(sentence.words)):
            word = sentence.words[w]
            rank = freeling_sentences[s][w].get_senses()
            if len(rank) > 0:
                word.PoS_tag = freeling_sentences[s][w].get_tag()
                if print_result:
                    print("Word : " + word.word)
                    print("PoS_tag : " + freeling_sentences[s][w].get_tag())
                    print("Label : " + dt.get_node_by_pos(w).get_label())

            # We use the get_node_by_pos function to map the tree to our sentence
            node = dt.get_node_by_pos(w)

            dep_tree_node = DepTreeNode(None, id_dep_tree, word.id_word, node.get_label(), 0)
            if node == dt.begin():
                dep_tree_node.root = 1
                root = dep_tree_node

            # Add DepTreeNode to database
            c.execute("INSERT INTO Dep_Tree_Node (ID_Dep_Tree, ID_Word, Label, root) "
                      "VALUES (?, ?, ?, ?)",
                      (dep_tree_node.id_dep_tree,
                       dep_tree_node.id_word,
                       dep_tree_node.label,
                       dep_tree_node.root))
            conn.commit()

            # Get back id_dep_tree_node
            c.execute("SELECT last_insert_rowid()")
            id_dep_tree_node = c.fetchone()[0]

            dep_tree_node.id_dep_tree_node = id_dep_tree_node

            # Use the freeling set_node_id function to store our db node id in the freeling node
            node.set_node_id(str(id_dep_tree_node))

            # Add PoS_tag to Word
            if word.PoS_tag is not None:
                c.execute("UPDATE Word SET PoS_tag = '" + word.PoS_tag + "' "
                          "WHERE ID_Word = " + str(word.id_word))
                conn.commit()

        # Add dep_tree root to database
        dep_tree.root = root
        c.execute("UPDATE Dep_Tree SET ID_Dep_Tree_Node = " + str(root.id_dep_tree_node) + " "
                  "WHERE ID_Dep_Tree = " + str(id_dep_tree))
        conn.commit()

        # Add children relations
        root_node = dt.begin()
        rec_children(c, root_node)
        conn.commit()

    print("Commit end.")
    conn.close()


def rec_children(c, node):
    for ch in range(0, node.num_children()):
        child = node.nth_child(ch)
        c.execute("INSERT INTO Dep_Tree_Node_Children (ID_Parent_Node, ID_Child_Node) "
                  "VALUES (?, ?)", (int(node.get_node_id()), int(child.get_node_id())))
        rec_children(c, child)


# ********************************************* Freeling Options****************************************************** #

def my_maco_options(lang, lpath):

    import os

    # create options holder
    opt = freeling.maco_options(lang)

    # Provide files for morphological submodules. Note that it is not
    # necessary to set file for modules that will not be used.
    opt.UserMapFile = ""
    opt.ProbabilityFile = os.path.join(lpath, "probabilitats.dat")
    opt.DictionaryFile = os.path.join(lpath, "dicc.src")
    opt.PunctuationFile = os.path.join(lpath, "..", "common", "punct.dat")
    return opt


def init_freeling():

    freeling.util_init_locale("default")

    from loacore.conf import lang
    from loacore.conf import LANG_PATH as lpath

    # create the analyzer with the required set of maco_options
    morfo = freeling.maco(my_maco_options(lang, lpath))

    morfo.set_active_options(False,  # UserMap
                             False,  # NumbersDetection,
                             True,  # PunctuationDetection,
                             False,  # DatesDetection,
                             True,  # DictionarySearch,
                             False,  # AffixAnalysis,
                             False,  # CompoundAnalysis,
                             False,  # RetokContractions,
                             False,  # MultiwordsDetection,
                             False,  # NERecognition,
                             False,  # QuantitiesDetection,
                             True)  # ProbabilityAssignment

    # create tagger
    tagger = freeling.hmm_tagger(os.path.join(lpath, "tagger.dat"), False, 2)

    # create sense annotator
    sen = freeling.senses(os.path.join(lpath, "senses.dat"))
    # create sense disambiguator
    wsd = freeling.ukb(os.path.join(lpath, "ukb.dat"))
    # create dependency parser
    parser = freeling.dep_treeler(os.path.join(lpath, "dep_treeler", "dependences.dat"))

    return morfo, tagger, sen, wsd, parser
