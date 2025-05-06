from flask import Flask, request, jsonify, session, send_from_directory
from flask_cors import CORS
from flask_session import Session
from db import *
import os
from chatbot import chat_with_ai
from image_ml import *

app = Flask(__name__,static_folder='build', static_url_path='')

# Enable CORS (Cross-Origin Resource Sharing) for the frontend to interact with the backend
CORS(app, supports_credentials=True,origins="*")

# Configure session
app.config['SECRET_KEY'] = os.urandom(24)  # Generate a secure random secret key
app.config['SESSION_TYPE'] = 'filesystem'  # Use filesystem for session storage
app.config['SESSION_PERMANENT'] = True

# Initialize Flask-Session
Session(app)

@app.route('/login', methods=['POST'])
def login():
    # Extract username and password from request
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    # Check if username exists
    dbpass=get_password(username)
    if username is None:
        return jsonify({"message": "User not found"}), 400

    # Verify the password
    if password != dbpass:
        return jsonify({"message": "Invalid credentials"}), 400
    
     # Store the username in the session
    session['user'] = username  # Save the username in the session
    # newval=session['user']
    # print(newval)
    # Login successful
    return jsonify({"message": "Login successful", "isLoggedIn": True})

@app.route('/logout', methods=['POST'])
def logout():
    # Remove the user from the session (log out the user)
    session.pop('user', None)
    return jsonify({"message": "Logged out successfully", "isLoggedIn": False})
    

@app.route('/signup', methods=['POST'])
def signup():
    # Extract username and password from request
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    # Check if the user already exists
    user = get_user_by_username(username)
    if user:
        return jsonify({"message": "User already exists"}), 400

    # Save new user to the database
    success = add_user(username, password)

    # Create a session for the new user
    session['user'] = username
    session.permanent = True

    if success:
        return jsonify({"message": "Signup successful", "isLoggedIn": True})
    else:
        return jsonify({"message": "Error signing up user"}), 500

@app.route('/account', methods=['POST'])
def get_account_info():
    # Get the username from the session
    username = session.get('user') # Ensure that the username is stored in the session
    # print(username)
    if not username:
        return jsonify({"error": "User not logged in"}), 401

    # Fetch user from MongoDB by username
    user = get_user_by_username(username)

    if not user:
        return jsonify({"error": "User not found"}), 404

    # Extract the necessary fields from the MongoDB document
    user_data = {
        "username": user.get("username"),
        "created_at": str(user.get("createdAt"))
    }

    return jsonify(user_data)

@app.route('/account/update-username', methods=['PUT'])
def update_username():
    if 'user' not in session:
        return jsonify({"message": "User not logged in"}), 401

    old_username = session.get('user')
    new_username = request.json.get('username')

    if update_usernameDB(old_username, new_username):
        session['user'] = new_username
        return jsonify({"message": "Username updated successfully"})
    else:
        return jsonify({"message": "Failed to update username"}), 400


@app.route('/account/change-password', methods=['PUT'])
def change_password():
    if 'user' not in session:
        return jsonify({"message": "User not logged in"}), 401

    username = session.get('user')
    current_password = request.json.get('currentPassword')
    new_password = request.json.get('newPassword')

    dbpass = get_password(username)
    if dbpass != current_password:
        return jsonify({"message": "Incorrect current password"}), 400

    if update_userpass(username, new_password):
        return jsonify({"message": "Password changed successfully"})
    else:
        return jsonify({"message": "Failed to change password"}), 400
    

@app.route('/chat', methods=['POST'])
def chat():
    # if 'user' not in session:
    #     return jsonify({"message": "User not logged in"}), 401

    user_input = request.json.get('message')  # Access the key `message`
    # print(user_input)
    if not user_input:
        return jsonify({"message": "No message provided"}), 400

    response = chat_with_ai(user_input)
    return jsonify({"response": response})


@app.route('/upload', methods=['POST'])
def upload_image():
    data = request.json.get('image')
    if not data:
        return jsonify({"message": "No image provided"}), 400
    
    # Decode base64 image data
    image_data = data.split(",")[1]
    username = request.json.get('username')
    print(username)
    sendImageDB(image_data,username)
    image=get_image_from_db(username)
    extracted_text = extract_text_from_image(image)
    print("Extracted Text:", extracted_text)
    chat_with_ai("try to understand the mathematical equation, like if 't' is written it could be '+', if '-' is written at the end it could be '=' and give whatever answer you can without asking anything, for equations, only give answer in one sentence and for word problems, use only plain text no style ")
    answer=chat_with_ai(extracted_text+" "+"just give the answer")
    return jsonify({"message": "Image uploaded successfully","answer":answer})

@app.route('/')
@app.route('/<path:path>')
def serve(path=''):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/images', methods=['POST'])
def get_images():
    username = session.get('user')
    print(username)
    images = getImageDB(username)  
    return jsonify(images)


if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0" ,port=5000)
