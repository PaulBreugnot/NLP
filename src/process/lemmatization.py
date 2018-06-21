import os
import re
import ressources.pyfreeling as freeling
import src.utils.file_writer as file_writer


def main():

    tk, sp, morfo = init_analyzers()

    for dirpath, dirnames, filenames in os.walk('../../data/tokenized/processed/'):
        for filename in filenames:
            tokenized_text = open(os.path.join(dirpath, filename), encoding='utf-8')
            tokens = tk.tokenize(tokenized_text.read())

            lemmas = search_lemmas(tokens, sp, morfo)


def init_analyzers():
    lang = "es"
    ipath = "/usr/local"
    # path to language data
    lpath = ipath + "/share/freeling/" + lang + "/"

    freeling.util_init_locale("default")

    # create the analyzer with the required set of maco_options
    morfo = freeling.maco(maco_options(lang, lpath))
    #  then, (de)activate required modules
    morfo.set_active_options(False,  # UserMap
                             False,  # NumbersDetection,
                             False,  # PunctuationDetection,
                             False,  # DatesDetection,
                             True,  # DictionarySearch,
                             False,  # AffixAnalysis,
                             False,  # CompoundAnalysis,
                             False,  # RetokContractions,
                             False,  # MultiwordsDetection,
                             False,  # NERecognition,
                             False,  # QuantitiesDetection,
                             False)  # ProbabilityAssignment

    # create analyzers
    tk = freeling.tokenizer(lpath + "tokenizer.dat")
    sp = freeling.splitter(lpath + "splitter.dat");

    return tk, sp, morfo


def maco_options(lang,lpath) :
    # For more options : https://talp-upc.gitbooks.io/freeling-tutorial/content/code/example01.py.html
    # create options holder
    opt = freeling.maco_options(lang);

    # Provide files for morphological submodules. Note that it is not
    # necessary to set file for modules that will not be used.
    opt.DictionaryFile = lpath + "dicc.src"
    return opt


def search_lemmas(tokens, sp, morfo, sort=True):
    sentences_list = sp.split(tokens)

    # perform morphosyntactic analysis (here : dictionary search)
    sentences_list = morfo.analyze(sentences_list)

    lemmas = []
    for sentence in sentences_list:
        for word in sentence:
            lemma = word.get_lemma()
            if (len(lemma)) > 0:
                lemmas.append(lemma)

    if sort:
        lemmas = sorted(lemmas)
    return lemmas


def write_lemmas(lemmas, dirpath, filename):

    lemmas_string = '\n'.join(lemmas)
    dirname = re.findall(r'^\.\./\.\./data/tokenized/processed/(.*)', dirpath)
    directory = os.path.join('../../data/lemmatized/', dirname[0])
    file_writer.write(lemmas_string, directory, filename)


if __name__ == "__main__":
    main()
