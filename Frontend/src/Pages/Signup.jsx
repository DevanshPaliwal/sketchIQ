// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     axios.defaults.withCredentials = true;
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const navigate = useNavigate();

//     const navigateToLogin = () => {
//         navigate('/login', { replace: true });
//     };


//     const handleSignup = async (e) => {
//         e.preventDefault();

//         // Simple client-side validation
//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:5000/signup', {
//                 username,
//                 password,
//             });
//             setSuccess('Signup successful!');
//             setUsername('');
//             setPassword('');
//             setConfirmPassword('');
//             navigate('/home', { replace: true });
//         } catch (err) {
//             setError(err.response ? err.response.data.message : 'Server error');
//         }
//     };

//     return (
//         <div
//             className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"
//             style={{
//                 backgroundImage: 'url("https://i.ibb.co/dfBhtDK/pexels-steve-1266808.jpg")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             <div className="bg-gradient-to-r from-white via-indigo-100 to-pink-100 p-8 rounded-xl shadow-lg w-96 transition-all transform hover:scale-105">
//                 <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
//                     Create Account
//                 </h2>

//                 {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//                 {success && <p className="text-green-500 text-center mb-4">{success}</p>}

//                 <form onSubmit={handleSignup}>
//                     <div className="mb-4">
//                         <label htmlFor="username" className="block text-gray-700">
//                             Username
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
//                             placeholder="Enter your username"
//                             required
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>

//                     <div className="mb-6">
//                         <label htmlFor="confirmPassword" className="block text-gray-700">
//                             Confirm Password
//                         </label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
//                             placeholder="Confirm your password"
//                             required
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
//                     >
//                         Sign Up
//                     </button>
//                 </form>

//                 <div className="mt-4 text-center">
//                     <p className="text-sm text-gray-600">
//                         Already have an account?&nbsp; 
//                         <button 
//                             onClick={navigateToLogin} 
//                             className="text-blue-600 hover:underline"
//                         >  
//                            Login
//                         </button>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    axios.defaults.withCredentials = true;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login', { replace: true });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        // Simple client-side validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                username,
                password,
            });
            setSuccess('Signup successful!');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            navigate('/home', { replace: true });
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Server error');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 overflow-hidden relative">
            {/* Background Animation */}
            <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-blue-300 via-purple-400 to-pink-300 rounded-full blur-3xl opacity-30 animate-rotate infinite"></div>

            <div className="relative z-10 bg-white rounded-3xl shadow-2xl flex flex-col sm:flex-row w-full max-w-5xl">
                {/* Left Section: Image */}
                <div className="hidden sm:block w-full sm:w-1/2 bg-gradient-to-br from-blue-200 to-purple-300 rounded-l-3xl overflow-hidden">
                    <img
                        src="https://source.unsplash.com/800x600/?signup,technology"
                        alt="Signup Illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Section: Form */}
                <div className="w-full sm:w-1/2 p-10 space-y-6">
                    <h2 className="text-3xl font-bold text-center text-indigo-600 animate-fade-in">
                        Create Account
                    </h2>

                    {error && <p className="text-red-500 text-center mb-4 animate-pulse">{error}</p>}
                    {success && (
                        <p className="text-green-500 text-center mb-4 animate-slide-down">
                            {success}
                        </p>
                    )}

                    <form onSubmit={handleSignup} className="space-y-4 animate-slide-up">
                        <div>
                            <label htmlFor="username" className="block text-gray-700 font-semibold">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
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
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-gray-700 font-semibold"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform duration-300 hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?&nbsp;
                            <button
                                onClick={navigateToLogin}
                                className="text-blue-600 hover:underline animate-pulse"
                            >
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
