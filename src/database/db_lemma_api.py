import sqlite3 as sql


def load_lemmas_list(id_lemmas):
    lemmas = []
    conn = sql.connect('../../data/database/reviews.db')
    c = conn.cursor()
    for id_lemma in id_lemmas:
        c.execute("SELECT Lemma FROM Lemma WHERE ID_Lemma = '" + str(id_lemma) + "'")
        result = c.fetchone()
        if result is not None:
            lemmas.append(result[0])

    conn.close()
    return lemmas


def load_lemmas_in_words(words):
    conn = sql.connect('../../data/database/reviews.db')
    c = conn.cursor()
    for word in words:
        if word.get_id_lemma() is not None:
            c.execute("SELECT Lemma FROM Lemma WHERE ID_Lemma = '" + str(word.get_id_lemma()) + "'")
            result = c.fetchone()
            word.set_lemma(result[0])

    conn.close()

