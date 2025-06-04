from pydantic import BaseModel, EmailStr
from typing import Optional

class User(BaseModel):
    uid: int
    username: str
    role: str
    password: str
    email: EmailStr

class UserUpdate(BaseModel):
    username: Optional[str]
    role: Optional[str]
    password: Optional[str]
    email: Optional[EmailStr]
