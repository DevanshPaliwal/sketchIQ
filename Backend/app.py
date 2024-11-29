from flask import Flask, request, jsonify,session
from flask_cors import CORS
from flask_session import Session
from db import add_user,get_user_by_username

app = Flask(__name__)

# Enable CORS (Cross-Origin Resource Sharing) for the frontend to interact with the backend
CORS(app)

# Set the secret key for session management
app.config['SECRET_KEY'] = 'your_secret_key_here'  # Replace with a strong secret key
app.config['SESSION_TYPE'] = 'filesystem'  # Store sessions on the filesystem

# Initialize session extension
Session(app)

# In-memory user database (replace with actual database in production)
users = {
    "testuser": {
        "username": "testuser",
        "password": "password123"  # Plain password (not hashed)
    }
}

@app.route('/login', methods=['POST'])
def login():
    # Extract username and password from request
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    # Check if username exists
    user = users.get(username)
    if user is None:
        return jsonify({"message": "User not found"}), 400

    # Verify the password
    if password != user["password"]:
        return jsonify({"message": "Invalid credentials"}), 400
    
     # Store the username in the session
    session['user'] = username  # Save the username in the session

    # Login successful
    return jsonify({"message": "Login successful"})

@app.route('/logout', methods=['POST'])
def logout():
    # Remove the user from the session (log out the user)
    session.pop('user', None)
    return jsonify({"message": "Logged out successfully"})
    

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

    if success:
        return jsonify({"message": "Signup successful"})
    else:
        return jsonify({"message": "Error signing up user"}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
