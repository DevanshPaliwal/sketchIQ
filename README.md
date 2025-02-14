# ✏️ SketchIQ: AI-Powered Equation & Word Problem Solver

## 📝 Project Overview

SketchIQ is an intelligent platform that allows users to write equations and word problems on a digital canvas, leveraging AI to provide instant solutions. The platform supports user authentication and saves problem history for future reference.

## ✨ Features

### 🖌️ Writing & Drawing Tools
- Freehand writing and equation input
- Text recognition (OCR) for equations and word problems
- Customizable pen, brush, and eraser settings

### 🤖 AI-Powered Solutions
- Real-time equation solving
- Step-by-step solutions for mathematical problems
- Word problem understanding and AI-generated solutions

### 🖼️ Canvas & Storage
- Multiple canvas sizes
- Save and retrieve problems
- Undo/Redo functionality

### 👤 User Management
- Secure signup and login
- Profile customization
- Saved problems history

## 🚀 Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Backend**: Flask (Python)
- **Database**: MongoDB
- **OCR Model**: Microsoft TrOCR
- **AI Integration**: Meta Llama3.1

## 🛠️ Installation

### Prerequisites
- Python
- Node.js
- npm
- MongoDB

### Steps
1. Clone the repository
   ```bash
   git clone https://github.com/DevanshPaliwal/sketchIQ.git
   cd sketchIQ
   ```

2. Set up Backend (Flask)
   ```bash
   # Create a virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   
   # Install Python dependencies
   pip install -r requirements.txt
   ```

3. Set up Frontend (React)
   ```bash
   cd frontend
   npm install
   ```

4. Configure Environment Variables
   - Create `.env` in the backend folder
   - Add `MONGODB_URI`, `JWT_SECRET`, `FLASK_SECRET_KEY`, `OPENAI_API_KEY`
   
   - Create `.env` in the frontend folder
   - Add any necessary frontend configuration

5. Run the Application
   ```bash
   # Start Flask backend (in backend directory)
   flask run
   
   # Start React frontend (in frontend directory)
   npm start
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


Project Link: [https://github.com/DevanshPaliwal/sketchIQ](https://github.com/DevanshPaliwal/sketchIQ)

---

**Happy Problem Solving! ✏️💡**
