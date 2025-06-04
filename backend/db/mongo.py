from pymongo import MongoClient

client = None
db = None

def connect_db():
    global client, db
    client = MongoClient("mongodb+srv://electricaltestingservicesanz:Edas%402025@edas.z8wapud.mongodb.net/")
    db = client["EDAS"]
    collection = db["edas"]

# 🔥 Call connect_db() when this file is imported
connect_db()

def get_user_collection():
    return db["users"]

