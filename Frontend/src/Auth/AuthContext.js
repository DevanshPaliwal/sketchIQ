import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Function to handle login
    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            if (response.data.isLoggedIn) {
                setIsLoggedIn(true); // Set login state to true
                navigate('/home', { replace: true });
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed');
        }
    };

    // Function to handle signup
    const signup = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/signup', { username, password });
            if (response.data.isLoggedIn) {
                setIsLoggedIn(true); // Set login state to true
                navigate('/home', { replace: true });
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Signup failed');
        }
    };

    // Function to handle logout
    const logout = async () => {
        try {
            await axios.post('http://localhost:5000/logout');
            setIsLoggedIn(false); // Set login state to false
            navigate('/', { replace: true }); // Redirect to landing page
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
