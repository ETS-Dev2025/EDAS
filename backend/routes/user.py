from fastapi import APIRouter
from backend.models.user import User, UserUpdate
from backend.crud import user as crud_user

router = APIRouter()

@router.post("/")
def create(user: User):
    result = crud_user.create_user(user)
    return {"id": str(result.inserted_id), "message": "User created"}

@router.get("/")
def read_all():
    return crud_user.get_users()

@router.get("/{uid}")
def read(uid: int):
    return crud_user.get_user(uid)

@router.put("/{uid}")
def update(uid: int, update_data: UserUpdate):
    return {"message": "User updated"} if crud_user.update_user(uid, update_data.dict(exclude_unset=True)) else None

@router.delete("/{uid}")
def delete(uid: int):
    crud_user.delete_user(uid)
    return {"message": "User deleted"}
