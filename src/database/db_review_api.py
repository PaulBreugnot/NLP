import sqlite3 as sql
import src.process.normalization as norm
from src.database.classes import Review


def load_reviews_list_by_ids(id_reviews):
    reviews = []
    conn = sql.connect('../../data/database/reviews.db')
    c = conn.cursor()
    for id_review in id_reviews:
        c.execute("SELECT ID_Review, Review.ID_File, File_Index, Review "
                  "FROM Review WHERE ID_Review = " + str(id_review))
        result = c.fetchone()
        if result is not None:
            reviews.append(Review(result[0], result[1], result[2], result[3]))

    conn.close()
    return reviews


def load_reviews_by_id_file(id_file):
    reviews = []
    conn = sql.connect('../../data/database/reviews.db')
    c = conn.cursor()
    c.execute("SELECT ID_Review, ID_File, File_Index, Review "
              "FROM Review WHERE ID_File = " + str(id_file))
    results = c.fetchall()
    for result in results:
        reviews.append(Review(result[0], result[1], result[2], result[3]))

    conn.close()
    return reviews


def load_reviews_in_files(files):
    conn = sql.connect('../../data/database/reviews.db')
    c = conn.cursor()

    loaded_reviews = []

    for file in files:
        file_reviews = []
        c.execute("SELECT ID_Review, ID_File, File_Index, Review "
                  "FROM Review WHERE ID_File = " + str(file.id_file))
        results = c.fetchall()
        for result in results:
            file_reviews.append(Review(result[0], result[1], result[2], result[3]))
        file.reviews = file_reviews
        loaded_reviews += file_reviews

    conn.close()
    return loaded_reviews


def count_reviews(file_path):
    conn = sql.connect('../../data/database/reviews.db')
    c = conn.cursor()
    c.execute("SELECT count(ID_Review) FROM Review JOIN File ON Review.ID_File = File.ID_File "
              "WHERE File_Path = '" + file_path + "'")

    conn.close()
    return c.fetchone()[0]


def add_reviews_from_files(files):
    """
    Load files from file system, normalize and add reviews to database.
    :param files: list of files from which reviews must be added
    :return: added reviews
    """
    conn = sql.connect('../../data/database/reviews.db')
    c = conn.cursor()

    added_reviews = []

    for file in files:

        # Load review as a string
        raw_text = file.load().read()

        # Normalization and review splitting
        reviews = norm.normalize(raw_text)

        # Add reviews
        file_index = 0
        for review in reviews:
            sql_review = (file.id_file, file_index, review)

            c.execute("INSERT INTO Review (ID_File, File_Index, Review) "
                      "VALUES (?, ?, ?)", sql_review)

            # Get back id of last inserted review
            c.execute("SELECT last_insert_rowid()")
            id_review = c.fetchone()[0]

            # Keep trace of added reviews
            added_reviews.append(Review(id_review, file.id_file, file_index, review))

            file_index += 1

    conn.commit()
    conn.close()

    return added_reviews

