import CanvasDraw from 'react-canvas-draw';
const LandingCanvas = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-2xl transform transition-transform hover:scale-105">
                <div className="h-[450px] w-[670px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center">
                    {/* Drawing Canvas */}
                    <CanvasDraw
                        canvasWidth={620}  // Increased canvas width
                        canvasHeight={420}  // Increased canvas height
                        brushColor="#9cc5f9" // Black marker
                        brushRadius={1.5} // Adjust brush thickness
                        className="rounded-lg shadow-lg"
                        hideGrid={true} // No grid on canvas
                        style={{ cursor: 'none' }}
                    />
                </div>
            </div>
        </div>


    )
}

export default LandingCanvas;
