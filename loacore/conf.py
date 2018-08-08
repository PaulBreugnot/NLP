import os

RESULT_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'results'))
DATA_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'data'))
DB_PATH = os.path.abspath(os.path.join(DATA_PATH, 'database', 'reviews.db'))
RESOURCES_PATHS = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'resources'))

lang = ""
FR_PATH = ""
LANG_PATH = ""


def set_lang(user_lang):
    """
    Set default language used in Freeling.\n
    Changes are permanent, until the next call to :func:`~loacore.conf.set_lang`.\n
    Possible values : 'as', 'ca', 'cy', 'de', 'en', 'es', 'fr', 'gl', 'hr', 'it', 'nb', 'pt', 'ru', 'sl'.

    :param user_lang: Freeling language
    :type user_lang: str
    """
    import sqlite3 as sql

    conn = sql.connect(DB_PATH)
    c = conn.cursor()
    print("Updating Configuration...")
    c.execute("DELETE FROM Configuration")
    c.execute("INSERT INTO Configuration (lang, freeling_path) VALUES (?, ?)", (user_lang, FR_PATH))

    conn.commit()
    print("Done.")
    conn.close()

    _load_conf()


def check_lang():
    """
    Print current *lang*.
    """
    print(lang)


def set_freeling_path(freeling_path):
    """
    Set Freeling path.
    Changes are permanent, until the next call to :func:`~loacore.conf.set_freeling_path`.\n

    :param freeling_path:
        Absolute path of the folder containing the *freeling* folder.\n
        The path must always be specified in the following format : */path/to/freeling* .
        Python will then automatically format it according to the current OS.
    :type freeling_path: :obj:`path-like object`
    """

    import sqlite3 as sql

    conn = sql.connect(DB_PATH)
    c = conn.cursor()
    print("Updating Configuration...")
    c.execute("DELETE FROM Configuration")
    c.execute("INSERT INTO Configuration (lang, freeling_path) VALUES (?, ?)", (lang, freeling_path))

    conn.commit()
    print("Done.")
    conn.close()

    _load_conf()


def check_freeling_path():
    """
    Print current *freeling_path*.
    """
    print(FR_PATH)


def _load_conf():
    import sqlite3 as sql
    conn = sql.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT lang, freeling_path FROM Configuration")
    result = c.fetchone()
    global FR_PATH
    for path in result[1].split('/'):
        FR_PATH = os.path.join(FR_PATH, path)
    global lang
    lang = result[0]
    global LANG_PATH
    LANG_PATH = os.path.abspath(os.path.join(FR_PATH, "freeling", lang))

    conn.close()


def _set_temp_lang(temp_lang):
    global lang
    lang = temp_lang
    global LANG_PATH
    LANG_PATH = os.path.abspath(os.path.join(FR_PATH, "freeling", lang))