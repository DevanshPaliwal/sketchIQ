import React from 'react';
import axios from 'axios';
import { replace, useNavigate } from 'react-router-dom';
import { FaPaintBrush, FaEye, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Home = () => {
    const navigate = useNavigate();

    const   handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:5000/logout');
            if (response.data.message === 'Logged out successfully') {
                navigate('/', { replace: true });
            }
        } catch (err) {
            console.error('Error logging out:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col">
            {/* Navbar */}
            <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-indigo-600">Paint.io</h1>
                <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </nav>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center px-4 py-8">
                <h2 className="text-3xl font-bold text-white mb-6">Welcome to the Home Page</h2>
                <p className="text-lg text-white mb-8">Choose an action below to get started:</p>

                {/* Action Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
                    {/* Create a Drawing */}
                    <div
                        onClick={() => navigate('/draw')}
                        className="group bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition"
                    >
                        <FaPaintBrush className="text-5xl text-indigo-600 mb-4 mx-auto group-hover:scale-110 transition" />
                        <h3 className="text-xl font-bold text-center text-indigo-700">Create a Drawing</h3>
                        <p className="text-gray-600 text-center mt-2">Start painting your masterpiece with our powerful tools.</p>
                    </div>

                    {/* View Drawings */}
                    <div
                        onClick={() => navigate('/view')}
                        className="group bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition"
                    >
                        <FaEye className="text-5xl text-green-600 mb-4 mx-auto group-hover:scale-110 transition" />
                        <h3 className="text-xl font-bold text-center text-green-700">View Drawings</h3>
                        <p className="text-gray-600 text-center mt-2">Explore all your saved drawings and artwork.</p>
                    </div>

                    {/* Account Info */}
                    <div
                        onClick={() => navigate('/account')}
                        className="group bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition"
                    >
                        <FaUserCircle className="text-5xl text-purple-600 mb-4 mx-auto group-hover:scale-110 transition" />
                        <h3 className="text-xl font-bold text-center text-purple-700">Account Info</h3>
                        <p className="text-gray-600 text-center mt-2">Manage your profile, preferences, and settings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
