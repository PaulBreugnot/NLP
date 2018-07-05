import os
import src.database.db_file_api as file_api


def add_files_to_database():
    file_paths = []
    for dirpath, dirnames, filenames in os.walk('../../data/raw/'):
        for name in filenames:
            file_paths.append(os.path.join(dirpath, name))

    file_api.add_files(file_paths)


def test_load_db():
    files = file_api.load_database()

    for file in files:
        for review in file.get_reviews():
            print("Review : ")
            print(str(review.get_id_review()) + " : " + review.get_review())
            for sentence in review.get_sentences():
                print("    Sentence : ")
                for word in sentence.get_words():
                    print("        " + word.get_word() + " ")



