from pymongo import MongoClient

# MongoDB setup (replace with your connection string)
MONGO_URI = 'mongodb+srv://paliwaldevansh2005:ZLhrlVWluhMbS9Ie@paintapp.9go9p.mongodb.net/?retryWrites=true&w=majority&appName=paintapp'
DB_NAME = 'userdatabase'
COLLECTION_NAME = 'users'

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
users_collection = db[COLLECTION_NAME]

def get_user_by_username(username):
    return users_collection.find_one({"username": username})

def add_user(username, password):
    try:
        users_collection.insert_one({"username": username, "password": password})
        return True
    except Exception as e:
        print(f"Error adding user: {e}")
        return False
