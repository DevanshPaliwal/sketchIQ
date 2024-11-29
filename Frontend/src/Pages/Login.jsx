import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            if (response.data.message === 'Login successful') {
                navigate('/home',{replace:true});
            }
        } catch (err) {
            setError('Invalid credentials or server error.');
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full sm:w-96 max-w-lg space-y-6">
                <h2 className="text-3xl font-bold text-center text-blue-900">Welcome Back</h2>
                <p className="text-center text-gray-500">Please sign in to continue</p>

                {error && <div className="text-red-500 text-center">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        Log In
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-4">
                    Don't have an account? 
                    <a href="/signup" className="text-blue-600 hover:underline"> Create one</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

