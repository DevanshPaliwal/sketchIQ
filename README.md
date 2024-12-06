# 🎨 Paint.io : Online Creative Canvas 🖌️

## 📝 Project Overview

Paint.io is a free, open-source web application that empowers artists and creative individuals to unleash their imagination through a comprehensive digital painting experience. With a wide range of tools, brushes, and customization options, users can create, save, and share their artwork seamlessly.

## ✨ Features

### 🖌️ Drawing Tools
- Multiple brush styles (watercolor, oil, acrylic, pencil)
- Various pen types (ballpoint, fountain, digital)
- Marker collection with different tip sizes and opacities
- Customizable brush properties (size, opacity, flow)

### 🎨 Color Palette
- Extensive color wheel
- Color picker with RGB and HEX support
- Gradient and pattern fills
- Preset color palettes

### 🖼️ Canvas Options
- Multiple canvas sizes and orientations
- Background textures
- Layer management
- Undo/Redo functionality

### 👤 User Management
- Secure signup and login
- Profile customization
- Artwork gallery
- Save and export drawings (PNG, JPEG, SVG)

## 🚀 Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Backend**: Flask (Python)
- **Database**: MongoDB
- **Authentication**: Clerk/JWT

## 🛠️ Installation

### Prerequisites
- Python 
- Node.js 
- npm 
- MongoDB

### Steps
1. Clone the repository
   ```bash
   git clone https://github.com/DevanshPaliwal/paint-io.git
   cd paint-io
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
   - Create `.env` in backend folder
   - Add `MONGODB_URI`, `JWT_SECRET`, `FLASK_SECRET_KEY`
   
   - Create `.env` in frontend folder
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

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

Project Link: [https://github.com/DevanshPaliwal/paint-io](https://github.com/DevanshPaliwal/paint-io)

---

**Happy Painting! 🖼️✨**
