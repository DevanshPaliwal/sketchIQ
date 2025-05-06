import React, { useState } from 'react';
import axios from 'axios';

const ChatbotPage = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (userInput.trim()) {
            const newMessage = { sender: 'user', text: userInput };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setLoading(true);
            
            try {
                const response = await axios.post(
                    'http://localhost:5000/chat',
                    { message: userInput },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        withCredentials: true,
                    }
                );
                // const response = await axios.post(
                //     'https://2426-2401-4900-547d-5007-893c-cffe-5f2a-269a.ngrok-free.app/chat',
                //     { message: userInput },
                //     {
                //         headers: {
                //             'Content-Type': 'application/json',
                //         },
                //         withCredentials: true,
                //     }
                // );
    
                if (response.data && response.data.response) {
                    const botResponse = { sender: 'bot', text: response.data.response };
                    setMessages((prevMessages) => [...prevMessages, botResponse]);
                } else {
                    throw new Error('Invalid response from server');
                }
            } catch (err) {
                setError('Error while communicating with chatbot. Please try again.');
            } finally {
                setLoading(false);
            }
    
            setUserInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage(e);  // Trigger the send message function when Enter key is pressed
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Assistant</h1>
            <div className="bg-white p-6 shadow-lg rounded-xl w-[900px] h-[700px] flex flex-col">
                <div className="flex-grow overflow-y-auto p-4 bg-gray-50 rounded-lg mb-4">
                    {/* Chat messages */}
                    {messages.map((msg, index) => (
                        <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                            <div
                                className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="text-center mb-3">
                            <div className="inline-block px-4 py-2 rounded-lg bg-gray-300">Loading...</div>
                        </div>
                    )}
                    {error && (
                        <div className="text-center text-red-500 mb-3">{error}</div>
                    )}
                </div>
                <div className="flex">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleKeyPress}  // Add onKeyDown to detect Enter key press
                        className="flex-grow p-3 border border-gray-300 rounded-l-lg"
                        placeholder="Type a message..."
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPage;
