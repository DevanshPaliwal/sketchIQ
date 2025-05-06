from pymongo import MongoClient
from datetime import datetime
from dotenv import load_dotenv
import os

load_dotenv()
# MongoDB setup (replace with your connection string)
MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = 'userdatabase'
COLLECTION_NAME = 'users'

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
users_collection = db[COLLECTION_NAME]
image_collection=db['imagedata']

def get_user_by_username(username):
    return users_collection.find_one({"username": username})

def add_user(username, password):
    try:
        users_collection.insert_one({"username": username, "password": password,"createdAt":datetime.now().strftime('%Y-%m-%d')})
        return True
    except Exception as e:
        print(f"Error adding user: {e}")
        return False
    
def get_password(username):
    try:
        # Find the user by username
        user = users_collection.find_one({"username": username})
        if user:  # Check if user exists
            return user.get("password")  # Return the password
        return None  # User not found
    except Exception as e:
        print(f"Error fetching password for username {username}: {e}")
        return None


def get_user_date(username):
    user = users_collection.find_one({"username": username})
    return user.get("createdAt")


def update_usernameDB(old_username,new_username):
    result = users_collection.update_one(
        {"username": old_username},
        {"$set": {"username": new_username}}
    )
    return result.modified_count > 0

def update_userpass(username,new_password):
    result = users_collection.update_one(
        {"username": username},
        {"$set": {"password": new_password}}
    )
    return result.modified_count > 0


def sendImageDB(image, username='dp'):
    try:
        image_collection.update_one(
            {"username": username},  # Filter
            {"$set": {"image": image}},  # Update data
            upsert=True  # Insert if not found
        )
        return True
    except Exception as e:
        print(f"Error adding/updating imageData: {e}")
        return False

def getImageDB(username):
    try:
        data = image_collection.find_one({"username": username})
        if data and "image" in data:
            return data["image"]
        return None
    except Exception as e:
        print(f"Error fetching image: {e}")
        return None