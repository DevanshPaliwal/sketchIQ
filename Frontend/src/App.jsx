import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Account from './Components/Account';
import View from './Components/View';
import Draw from './Components/Draw';
import { AuthProvider } from './Auth/AuthContext';
import LandingPage from './Pages/LandingPage';
import ChatbotPage from './Pages/Chatbot';


// Existing Icons (with minimal updates)


const App = () => {
    return (
        <Router>
            <Routes>
                {/* Default route */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/account" element={<Account />} />
                <Route path="/view" element={<View />} />
                <Route path="/draw" element={<Draw />} />
                <Route path='/chatbot' element={<ChatbotPage/>}/>
            </Routes>
        </Router>
    );
};



export default App;