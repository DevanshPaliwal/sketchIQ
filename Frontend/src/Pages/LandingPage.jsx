// // import { useState } from 'react';
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// // import { AuthProvider } from '../Auth/AuthContext';
// // import LandingCanvas from '../Components/LandingCanvas';


// // const PaletteIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
// //         className="w-16 h-16 text-blue-600 transition-transform duration-300 group-hover:scale-110">
// //         <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.763 9.51a2.25 2.25 0 0 1 3.828-1.351.75.75 0 0 0 1.08.032l3.57-3.318a5.26 5.26 0 0 1 3.59 4.674 5.23 5.23 0 0 1-2.958 4.74c-1.205.597-2.766.94-4.392.94a5.61 5.61 0 0 1-2.849-.765 2.25 2.25 0 0 1-1.009-1.94v-.504c0-.592-.237-1.161-.659-1.584a2.247 2.247 0 0 0-1.589-.659h-.072a3.71 3.71 0 0 1-2.81-1.208l-.002-.002Z" clipRule="evenodd" />
// //     </svg>
// // );

// // const BrushIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
// //         className="w-16 h-16 text-green-600 transition-transform duration-300 group-hover:scale-110">
// //         <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 18.636A8.214 8.214 0 0 1 18 16.5c1.195 0 2.4.26 3.5.755V4.512a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v14.103Z" />
// //     </svg>
// // );

// // const CanvasIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
// //         className="w-16 h-16 text-purple-600 transition-transform duration-300 group-hover:scale-110">
// //         <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h14.5a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-14.5Zm4.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm1.5 8.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm2.25-7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
// //     </svg>
// // );

// // const LandingPage = () => {
// //     const navigate = useNavigate();
// //     const [activeSection, setActiveSection] = useState(null);

// //     const features = [
// //         {
// //             icon: <PaletteIcon />,
// //             title: 'Unlimited Colors',
// //             description: 'Explore an infinite palette of colors and express your creativity without limits.'
// //         },
// //         {
// //             icon: <BrushIcon />,
// //             title: 'Advanced Tools',
// //             description: 'Professional-grade painting tools at your fingertips, perfect for artists of all levels.'
// //         },
// //         {
// //             icon: <CanvasIcon />,
// //             title: 'Endless Canvas',
// //             description: 'Stretch your imagination across boundless digital canvases, limited only by your creativity.'
// //         }
// //     ];

// //     const goToLogin = () => {
// //         navigate('/login');
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col overflow-hidden">
// //             {/* Header with enhanced interactivity */}
// //             <header className="bg-white shadow-md py-6 animate-fade-in">
// //                 <div className="container mx-auto px-4 flex justify-between items-center">
// //                     <div className="text-3xl font-bold text-blue-800 transition-transform hover:scale-105">
// //                         Articulate AI
// //                     </div>
// //                     <nav className="space-x-6">
// //                         {['Home', 'Gallery', 'Create'].map((item) => (
// //                             <button
// //                                 key={item}
// //                                 className="hover:text-blue-600 transition-colors group relative"
// //                             >
// //                                 {item}
// //                                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
// //                             </button>
// //                         ))}
// //                         <button
// //                             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg"
// //                             onClick={goToLogin}
// //                         >
// //                             Login
// //                         </button>
// //                     </nav>
// //                 </div>
// //             </header>

// //             {/* Hero Section with subtle animations */}
// //             <main className="flex-grow container mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-12 animate-slide-in-right">
// //                 <div className="space-y-6">
// //                     <h1 className="text-5xl font-extrabold text-blue-900 transform transition-transform hover:translate-x-2">
// //                         Unleash Your
// //                         <br />
// //                         <span className="text-blue-600">Creative Potential</span>
// //                     </h1>
// //                     <p className="text-xl text-gray-600 opacity-80 hover:opacity-100 transition-opacity">
// //                         Transform your ideas into stunning digital artwork with our intuitive painting platform.
// //                     </p>
// //                     <div className="space-x-4">
// //                         <button
// //                             className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg"
// //                             onClick={goToLogin}
// //                         >
// //                             Start Painting
// //                         </button>
// //                         <button
// //                             className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105"
// //                         >
// //                             Learn More
// //                         </button>
// //                     </div>
// //                 </div>
// //                 <LandingCanvas/>
// //             </main>

// //             {/* Features Section with enhanced hover effects */}
// //             <section className="bg-white py-16">
// //                 <div className="container mx-auto px-4">
// //                     <div className="text-center mb-12">
// //                         <h2 className="text-4xl font-bold text-blue-900 mb-4 animate-fade-in-delay">
// //                             Why Choose Paint.io?
// //                         </h2>
// //                         <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
// //                             We provide a seamless, powerful platform for digital artists to bring their imagination to life.
// //                         </p>
// //                     </div>
// //                     <div className="grid md:grid-cols-3 gap-8">
// //                         {features.map((feature, index) => (
// //                             <div
// //                                 key={index}
// //                                 className={`
// //                                     bg-white p-6 rounded-xl shadow-lg 
// //                                     transition-all duration-300 group
// //                                     ${activeSection === index
// //                                         ? 'scale-105 shadow-2xl'
// //                                         : 'hover:scale-105 hover:shadow-xl'}
// //                                     text-center
// //                                 `}
// //                                 onMouseEnter={() => setActiveSection(index)}
// //                                 onMouseLeave={() => setActiveSection(null)}
// //                             >
// //                                 <div className="flex justify-center mb-6">
// //                                     {feature.icon}
// //                                 </div>
// //                                 <h3 className="text-2xl font-bold mb-4 text-blue-900 transition-colors group-hover:text-blue-700">
// //                                     {feature.title}
// //                                 </h3>
// //                                 <p className="text-gray-600 transition-opacity group-hover:opacity-80">
// //                                     {feature.description}
// //                                 </p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Footer with subtle animation */}
// //             <footer className="bg-blue-900 text-white py-12 animate-fade-in">
// //                 <div className="container mx-auto px-4 text-center">
// //                     <p className="transition-opacity hover:opacity-80">&copy; Made by someone!</p>
// //                 </div>
// //             </footer>
// //         </div>
// //     );
// // };

// // export default LandingPage;

// import { useState } from 'react';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import LandingCanvas from '../Components/LandingCanvas';

// const Icon = ({ icon, title }) => (
//     <div className="flex flex-col items-center group transition-transform transform hover:scale-105">
//         <div className="w-16 h-16 mb-4 text-blue-600 group-hover:text-blue-800">
//             {icon}
//         </div>
//         <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
//             {title}
//         </h3>
//     </div>
// );



// const LandingPage = () => {
//     const navigate = useNavigate();

//     const goToLogin = () => {
//         navigate('/login');
//     };

//     const features = [
//         {
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z" />
//                 </svg>
//             ),
//             title: 'Equations',
//             description: 'Convert handwritten equations into step-by-step solutions instantly.'
//         },
//         {
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555v14.25c0 .41.337.75.75.75a8.237 8.237 0 0 1 5.25-1.455c2.1 0 4.052.755 5.5 1.836V4.533Z" />
//                 </svg>
//             ),
//             title: 'Word Problems',
//             description: 'Get concise, AI-powered explanations for complex word problems.'
//         },
//         {
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M5.25 2.25a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h14.5a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3H5.25Z" />
//                 </svg>
//             ),
//             title: 'Creative Drawings',
//             description: 'Transform your sketches into meaningful digital representations.'
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
//             {/* Header */}
//             <header className="bg-white shadow-md py-6">
//                 <div className="container mx-auto px-4 flex justify-between items-center">
//                     <div className="text-3xl font-bold text-blue-800">SketchIQ</div>
//                     <nav className="space-x-6">
//                         <button className="hover:text-blue-600">Home</button>
//                         <button className="hover:text-blue-600">Features</button>
//                         <button
//                             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
//                             onClick={() => navigate('/login')}
//                         >
//                             Login
//                         </button>
//                     </nav>
//                 </div>
//             </header>

//             {/* Hero Section */}
//             <main className="flex-grow container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
//                 <div className="space-y-6">
//                     <h1 className="text-5xl font-extrabold text-blue-900">
//                         Redefine Creativity
//                         <br />
//                         <span className="text-blue-600">with AI-Powered Insights</span>
//                     </h1>
//                     <p className="text-lg text-gray-600">
//                         Whether it’s equations, word problems, or artistic drawings, let SketchIQ transform your hand-drawn ideas into actionable solutions and insights.
//                     </p>
//                     <div className="space-x-4">
//                         <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700" onClick={goToLogin}>
//                             Get Started
//                         </button>
//                         <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50">
//                             Learn More
//                         </button>
//                     </div>
//                 </div>
//                 <LandingCanvas />
//             </main>

//             {/* Features Section */}
//             <section className="py-16 bg-white">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
//                         How It Works
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         {features.map((feature, index) => (
//                             <div
//                                 key={index}
//                                 className="p-6 bg-gray-50 rounded-xl shadow-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105"
//                             >
//                                 <Icon icon={feature.icon} title={feature.title} />
//                                 <p className="text-gray-600 mt-4">{feature.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-blue-900 text-white py-8">
//                 <div className="container mx-auto text-center">
//                     <p>&copy; 2025 SketchIQ. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default LandingPage;


import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingCanvas from '../Components/LandingCanvas';
import ChatbotPage from './Chatbot'; // Import the chatbot page

const Icon = ({ icon, title }) => (
    <div className="flex flex-col items-center group transition-transform transform hover:scale-105">
        <div className="w-16 h-16 mb-4 text-blue-600 group-hover:text-blue-800">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
            {title}
        </h3>
    </div>
);

const LandingPage = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToChatbot = () => {
        navigate('/chatbot');
    };

    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z" />
                </svg>
            ),
            title: 'Equations',
            description: 'Convert handwritten equations into step-by-step solutions instantly.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555v14.25c0 .41.337.75.75.75a8.237 8.237 0 0 1 5.25-1.455c2.1 0 4.052.755 5.5 1.836V4.533Z" />
                </svg>
            ),
            title: 'Word Problems',
            description: 'Get concise, AI-powered explanations for complex word problems.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.25 2.25a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h14.5a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3H5.25Z" />
                </svg>
            ),
            title: 'Creative Drawings',
            description: 'Transform your sketches into meaningful digital representations.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md py-6">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="text-3xl font-bold text-blue-800">SketchIQ</div>
                    <nav className="space-x-6">
                        <button className="hover:text-blue-600">Home</button>
                        <button className="hover:text-blue-600">Features</button>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </button>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-grow container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h1 className="text-5xl font-extrabold text-blue-900">
                        Redefine Creativity
                        <br />
                        <span className="text-blue-600">with AI-Powered Insights</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Whether it’s equations, word problems, or artistic drawings, let SketchIQ transform your hand-drawn ideas into actionable solutions and insights.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700" onClick={goToLogin}>
                            Get Started
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50">
                            Learn More
                        </button>
                        {/* Add a button to navigate to the chatbot */}
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700" onClick={goToChatbot}>
                            Chat with AI
                        </button>
                    </div>
                </div>
                <LandingCanvas />
            </main>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
                        How It Works
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-50 rounded-xl shadow-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105"
                            >
                                <Icon icon={feature.icon} title={feature.title} />
                                <p className="text-gray-600 mt-4">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 SketchIQ. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
