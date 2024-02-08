// src/components/Toaster.js
import React from 'react';

const Toaster = ({ errors }) => {
  return (
    <div>
      {Object.values(errors).map((error, index) => (
        <div key={index} style={{ color: 'red' }}>
          {error}
        </div>
      ))}
    </div>
  );
};

export default Toaster;
