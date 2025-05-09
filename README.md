# ✏️✨ SketchIQ – AI-Powered Handwritten Problem Solver

Welcome to **SketchIQ**, your smart companion for solving **handwritten math equations** and **word problems**. Just sketch your question, and let AI take care of the rest! 🚀🧠

---

## 🌟 Features

- 🖌️ **Canvas-based Input** – Draw math problems or word questions directly
- 🔍 **OCR-Powered Recognition** – Converts sketches to text using TrOCR
- 🤖 **AI-Powered Solving** – LLMs interpret and solve your input
- 🧾 **Smart Summaries** – Receive structured answers and solutions
- 🔐 **User Authentication** – Login via phone or Google
- 💾 **Cloud Storage** – Save sketches and responses for later use

---

## 🧠 How It Works

1. ✍️ User **draws** a problem on the canvas
2. 📸 Image is sent to the backend
3. 🔤 **OCR (TrOCR)** converts drawing to text
4. 🤖 **Gemini 2.0 Flash** interprets and solves it
5. 📬 Result is displayed and can be saved

---

## 🛠️ Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| 🎨 Frontend | React + TypeScript + Tailwind CSS |
| 🧠 AI       | Microsoft TrOCR, Gemini 2.0 Flash |
| 🖥️ Backend | Flask (OCR API) + Node.js (LLM & Auth) |
| 🔐 Auth     | Firebase (Google + OTP Login) |
| 🧮 DB       | PostgreSQL (via Prisma ORM) |
| ☁️ Hosting  | Firebase + Ngrok (for Flask API) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Python 3.8+
- Firebase project
- PostgreSQL database

### 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/sketchiq.git
cd sketchiq

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
pip install -r requirements.txt

