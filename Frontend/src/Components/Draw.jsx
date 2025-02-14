// import React, { useRef, useState, useEffect } from 'react';

// function Draw() {
//   const canvasRef = useRef(null);
//   const ctxRef = useRef(null);
//   const [drawing, setDrawing] = useState(false);
//   const [brushSize, setBrushSize] = useState(5);
//   const [brushColor, setBrushColor] = useState('#000000');
//   const [opacity, setOpacity] = useState(1);
//   const [darkMode, setDarkMode] = useState(false);
//   const [isErasing, setIsErasing] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     ctxRef.current = ctx;

//     canvas.width = window.innerWidth * 0.9;
//     canvas.height = window.innerHeight * 1;
//     ctx.lineCap = 'round';
//     ctx.lineJoin = 'round';
//   }, []);

//   const startDrawing = (e) => {
//     setDrawing(true);
//     draw(e);
//   };

//   const stopDrawing = () => {
//     setDrawing(false);
//     ctxRef.current.beginPath();
//   };

//   const draw = (e) => {
//     if (!drawing) return;

//     const ctx = ctxRef.current;
//     const canvas = canvasRef.current;

//     const rect = canvas.getBoundingClientRect();
//     const scaleX = canvas.width / rect.width;
//     const scaleY = canvas.height / rect.height;
//     const x = (e.clientX - rect.left) * scaleX;
//     const y = (e.clientY - rect.top) * scaleY;

//     ctx.globalAlpha = opacity;
//     ctx.lineWidth = brushSize;
//     ctx.strokeStyle = isErasing ? (darkMode ? 'black' : 'white') : brushColor;

//     ctx.lineTo(x, y);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//   };

//   const toggleEraser = () => {
//     setIsErasing((prev) => !prev);
//   };

//   const sendToServer = async () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
  
//     // Create a temporary canvas to merge the white background
//     const tempCanvas = document.createElement("canvas");
//     const tempCtx = tempCanvas.getContext("2d");
  
//     tempCanvas.width = canvas.width;
//     tempCanvas.height = canvas.height;
  
//     // Fill with white background
//     tempCtx.fillStyle = "#FFFFFF";
//     tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  
//     // Draw the original canvas on top
//     tempCtx.drawImage(canvas, 0, 0);
  
//     // Convert to image with white background
//     const imageData = tempCanvas.toDataURL("image/png");
  
//     try {
//       // const response = await fetch("https://2426-2401-4900-547d-5007-893c-cffe-5f2a-269a.ngrok-free.app/upload", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify({ image: imageData }),
//       // });
//       const response = await fetch("http://localhost:5000/upload", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ image: imageData,username:currentUser }),
//         });
//       const result = await response.json();
//       console.log("Server Response:", result);
//     } catch (error) {
//       console.error("Error sending image to server:", error);
//     }
//   };
  

//   return (
//     <div
//       className={`min-h-screen p-6 transition-colors duration-300 ${
//         darkMode ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-800'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-bold">Canvas</h1>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className={`px-4 py-2 rounded-lg transition-colors ${
//               darkMode
//                 ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//                 : 'bg-gray-800 text-gray-100 hover:bg-black'
//             }`}
//           >
//             {darkMode ? 'Light' : 'Dark'} Mode
//           </button>
//         </div>

//         <div className="flex gap-6">
//           <div
//             className={`p-4 rounded-lg shadow-lg w-64 space-y-4 transition-colors ${
//               darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
//             }`}
//           >
//             <h2 className="text-lg font-semibold">Controls</h2>
//             <div>
//               <label className="text-sm block mb-2">Brush Size: {brushSize}px</label>
//               <input
//                 type="range"
//                 min="1"
//                 max="50"
//                 value={brushSize}
//                 onChange={(e) => setBrushSize(parseInt(e.target.value))}
//                 className="w-full"
//               />
//             </div>

//             <div>
//               <label className="text-sm block mb-2">Opacity: {Math.round(opacity * 100)}%</label>
//               <input
//                 type="range"
//                 min="1"
//                 max="100"
//                 value={opacity * 100}
//                 onChange={(e) => setOpacity(parseInt(e.target.value) / 100)}
//                 className="w-full"
//               />
//             </div>

//             <div>
//               <label className="text-sm block mb-2">Color</label>
//               <input
//                 type="color"
//                 value={brushColor}
//                 onChange={(e) => setBrushColor(e.target.value)}
//                 className="w-full h-10 cursor-pointer"
//                 disabled={isErasing}
//               />
//             </div>
            
//             <button onClick={toggleEraser} className="w-full bg-red-500 text-white p-2 rounded-lg">
//               {isErasing ? 'Disable Eraser' : 'Enable Eraser'}
//             </button>
//             <button onClick={sendToServer} className="w-full bg-blue-500 text-white p-2 rounded-lg">
//               Send to Server
//             </button>
//           </div>

//           <div className="flex-1">
//             <div
//               className={`rounded-lg shadow-lg p-4 transition-colors ${
//                 darkMode ? 'bg-gray-800' : 'bg-white'
//               }`}
//             >
//               <canvas
//                 ref={canvasRef}
//                 onMouseDown={startDrawing}
//                 onMouseUp={stopDrawing}
//                 onMouseLeave={stopDrawing}
//                 onMouseMove={draw}
//                 className={`w-full border rounded-lg cursor-crosshair ${
//                   darkMode ? 'border-gray-700' : 'border-gray-300'
//                 }`}
//                 style={{ backgroundColor: darkMode ? 'black' : '#fff' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Draw;


import React, { useRef, useState, useEffect } from 'react';

function Draw() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#000000');
  const [opacity, setOpacity] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 1;
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

    ctx.globalAlpha = opacity;
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = isErasing ? (darkMode ? 'black' : 'white') : brushColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const toggleEraser = () => {
    setIsErasing((prev) => !prev);
  };

  const sendToServer = async () => {
    if (!username) {
      alert('Please enter a username');
      return;
    }

    const canvas = canvasRef.current;
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempCtx.fillStyle = '#FFFFFF';
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(canvas, 0, 0);

    const imageData = tempCanvas.toDataURL('image/png');

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData, username:username }),
      });
      const result = await response.json();
      console.log('Server Response:', result);
    } catch (error) {
      console.error('Error sending image to server:', error);
    }
  };

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        darkMode ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Canvas</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                : 'bg-gray-800 text-gray-100 hover:bg-black'
            }`}
          >
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        <div className="flex gap-6">
          <div
            className={`p-4 rounded-lg shadow-lg w-64 space-y-4 transition-colors ${
              darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
            }`}
          >
            <h2 className="text-lg font-semibold">Controls</h2>
            <div>
              <label className="text-sm block mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="text-sm block mb-2">Brush Size: {brushSize}px</label>
              <input
                type="range"
                min="1"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm block mb-2">Opacity: {Math.round(opacity * 100)}%</label>
              <input
                type="range"
                min="1"
                max="100"
                value={opacity * 100}
                onChange={(e) => setOpacity(parseInt(e.target.value) / 100)}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm block mb-2">Color</label>
              <input
                type="color"
                value={brushColor}
                onChange={(e) => setBrushColor(e.target.value)}
                className="w-full h-10 cursor-pointer"
                disabled={isErasing}
              />
            </div>

            <button onClick={toggleEraser} className="w-full bg-red-500 text-white p-2 rounded-lg">
              {isErasing ? 'Disable Eraser' : 'Enable Eraser'}
            </button>
            <button onClick={sendToServer} className="w-full bg-blue-500 text-white p-2 rounded-lg">
              Send to Server
            </button>
          </div>

          <div className="flex-1">
            <div className={`rounded-lg shadow-lg p-4 transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onMouseMove={draw}
                className={`w-full border rounded-lg cursor-crosshair ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                style={{ backgroundColor: darkMode ? 'black' : '#fff' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draw;
