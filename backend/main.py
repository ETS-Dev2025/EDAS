from fastapi import FastAPI
from backend.routes import user
from backend.db.mongo import connect_db

app = FastAPI(title="EDAS API")

# MongoDB connection
connect_db()

# Include routes
app.include_router(user.router, prefix="/users", tags=["Users"])

@app.get("/")
def root():
    return {"message": "Welcome to EDAS API"}
