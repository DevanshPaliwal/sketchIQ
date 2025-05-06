import React, { useRef, useEffect, useState } from 'react';

const LandingCanvas = () => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [drawing, setDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;

        canvas.width = 640;
        canvas.height = 420;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }, []);

    const startDrawing = (e) => {
        setDrawing(true);
        draw(e);
    };

    const stopDrawing = () => {
        setDrawing(false);
        ctxRef.current.beginPath();
    };

    const draw = (e) => {
        if (!drawing) return;

        const ctx = ctxRef.current;
        const canvas = canvasRef.current;

        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;

        ctx.lineWidth = 2;
        ctx.strokeStyle = '#9cc5f9';
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    return (
        <div className="relative flex justify-center ">
            {/* <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div> */}
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-2xl transform transition-transform hover:scale-105">
                <div className="h-[450px] w-[670px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center">
                    <canvas
                        ref={canvasRef}
                        onMouseDown={startDrawing}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onMouseMove={draw}
                        className="rounded-lg shadow-lg cursor-crosshair bg-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingCanvas;
