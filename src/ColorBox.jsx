import React from 'react';
import './colorBox.css';

const ColorBox = ({ color }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="color-box" style={{ background: color }} onClick={copyToClipboard}>
      <p>{color}</p>
    </div>
  );
};
export default ColorBox;
