import axios from 'axios';
import React, { useState, useEffect } from 'react';

function View() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .post('http://localhost:5000/images')
      .then((res) => setImages(res.data || []))  // Fallback to empty array
      .catch((err) => {
        console.error(err);
        setImages([]);  // Set empty array on error
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Stored Images</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={`data:image/png;base64,${image}`}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default View;
