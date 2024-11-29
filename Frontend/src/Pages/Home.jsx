// src/pages/Home.jsx
import React from 'react';
import axios from 'axios';
import { replace, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();  // Hook to navigate after logout

    const handleLogout = async () => {
        try {
            // Send POST request to logout endpoint on the Flask backend
            const response = await axios.post('http://localhost:5000/logout');

            if (response.data.message === 'Logged out successfully') {
                // Navigate to the login page after successful logout
                navigate('/login',{replace:true});
                
            }
        } catch (err) {
            console.error('Error logging out:', err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
                <h2 className="text-2xl font-bold text-blue-900">Welcome to the Home Page</h2>
                <p className="mt-4 text-gray-600">You have successfully logged in!</p>
                
                {/* Logout Button */}
                <button 
                    onClick={handleLogout} 
                    className="mt-6 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;
