import os
import re
import sqlite3 as sql
from loacore import DB_PATH
from loacore.classes.classes import Review
from loacore.classes.classes import Polarity


def add_reviews_from_files(files, encoding):
    """

    Load argument files from file system and normalize their content.\n
    Compute Reviews objects and add them to the database.

    .. note:: This function should be used only inside the :func:`file_process.add_files()` function.

    :param files: :class:`File` s to process
    :type files: :obj:`list` of :class:`File`
    :param encoding: Encoding used to load files.
    :type encoding: String
    :return: added :class:`Review` s
    :rtype: :obj:`list` of :class:`Review`

    """

    conn = sql.connect(DB_PATH)
    c = conn.cursor()

    reviews = []

    for file in files:
        # Load review as a string
        raw_text = file.load(encoding=encoding).read()

        # Normalization and review splitting
        str_reviews = normalize(raw_text)
        file_reviews = extract_polarity(str_reviews)

        # Add reviews
        file_index = 0
        for review in file_reviews:
            sql_review = (file.id_file, file_index, review.review)

            c.execute("INSERT INTO Review (ID_File, File_Index, Review) "
                      "VALUES (?, ?, ?)", sql_review)

            # Get back id of last inserted review
            c.execute("SELECT last_insert_rowid()")
            id_review = c.fetchone()[0]

            review.id_review = id_review
            review.id_file = file.id_file
            review.file_index = file_index

            file_index += 1

        reviews += file_reviews

    conn.commit()
    conn.close()

    return reviews


def normalize(text):
    """

    Performs raw text normalization.

    - Convertion to lower case
    - Review splitting using python regular expressions : each new line correspond to a new review

    :param text: text to process
    :type text: string
    :return: reviews
    :rtype: :obj:`list` of :obj:`string`
    """
    normalized_string = text.lower()
    reviews = re.findall(r'.+', normalized_string, re.MULTILINE)
    return reviews


def extract_polarity(str_reviews):
    reviews = []
    for review_str in str_reviews:
        polarity = re.findall(r'.+\t(\d)\t(\d)\t(\d)', review_str)
        if len(polarity) > 0:
            sentence = re.findall(r'(.+)\t\d\t\d\t\d', review_str)
            review = Review(None, None, None, sentence[0])
            review.polarities["label"] = Polarity(None, "label", None,
                                                  float(polarity[0][0]), float(polarity[0][1]), float(polarity[0][2]))
            reviews.append(review)
        else:
            reviews.append(Review(None, None, None, review_str))
    return reviews
