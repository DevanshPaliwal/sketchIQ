import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    axios.defaults.withCredentials = true;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const navigateToSignup = () => {
        navigate('/signup', { replace: true });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            // const response = await axios.post('https://2426-2401-4900-547d-5007-893c-cffe-5f2a-269a.ngrok-free.app/login', { username, password });
            if (response.data.message === 'Login successful') {
                
                navigate('/home', { replace: true });
            }
        } catch (err) {
            console.log(err)
            setError('Invalid credentials or server error.');
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center overflow-hidden relative">
            {/* Background animation */}
            <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-blue-300 via-purple-400 to-pink-300 rounded-full blur-3xl opacity-30 animate-rotate infinite"></div>

            <div className="relative z-10 bg-white rounded-3xl shadow-2xl flex flex-col sm:flex-row w-full max-w-5xl">
                {/* Left Side - Image */}
                <div className="hidden sm:block w-full sm:w-1/2 bg-gradient-to-br from-blue-200 to-purple-300 rounded-l-3xl overflow-hidden">
                    <img
                        src="https://source.unsplash.com/800x600/?login,technology"
                        alt="Login Illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full sm:w-1/2 p-10 space-y-6">
                    <h2 className="text-4xl font-bold text-center text-blue-900 animate-fade-in">
                        Welcome Back
                    </h2>
                    <p className="text-center text-gray-500 animate-fade-in-delay">
                        Please sign in to continue
                    </p>

                    {error && (
                        <div className="text-red-500 text-center animate-fade-in">{error}</div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4 animate-slide-up">
                        <div>
                            <label htmlFor="username" className="block text-gray-700 font-semibold">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-semibold">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?&nbsp;
                            <button
                                onClick={navigateToSignup}
                                className="text-blue-600 hover:underline animate-pulse"
                            >
                                Create one
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

