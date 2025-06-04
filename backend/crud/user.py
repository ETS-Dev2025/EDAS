from fastapi import HTTPException
from backend.db.mongo import get_user_collection

collection = get_user_collection()

def create_user(user):
    if collection.find_one({"uid": user.uid}):
        raise HTTPException(status_code=400, detail="UID already exists")
    return collection.insert_one(user.dict())

def get_users():
    return [{**doc, "_id": str(doc["_id"])} for doc in collection.find()]

def get_user(uid: int):
    user = collection.find_one({"uid": uid})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user["_id"] = str(user["_id"])
    return user

def update_user(uid: int, update_data: dict):
    result = collection.update_one({"uid": uid}, {"$set": update_data})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return result

def delete_user(uid: int):
    result = collection.delete_one({"uid": uid})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return result
