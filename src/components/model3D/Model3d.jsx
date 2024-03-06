import React from 'react';
import './model3D.css';

function My3DModel() {
  return (
    <> 
    <h1>¡Saluda a nuestro pitufo!</h1>
    <div className='model-3d'>
      <iframe
        title="Smurf Model"
        src="https://sketchfab.com/models/bc66e52ed13a4f8cb5fc890355f89a40/embed"
        frameBorder="0"
        allowFullScreen
        mozAllowFullScreen="true"
        webkitAllowFullScreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        style={{ width: 'auto', height: '500px' }}
      />
    </div>
    </>
  );
}

export default My3DModel;