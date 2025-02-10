from pymongo import MongoClient
from datetime import datetime

# MongoDB setup (replace with your connection string)
MONGO_URI = 'your mongo string'
DB_NAME = 'userdatabase'
COLLECTION_NAME = 'users'

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
users_collection = db[COLLECTION_NAME]

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


