import React from 'react';
import ColorBox from './ColorBox';
import './colorPicker.css';

const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1', '#33FFF5', '#F5FF33', '#FF8C33'
];

const ColorPicker = () => {
  return (
    <div className="color-picker" style={{ backgroundColor: colors}}>
      {colors.map(color => (
        <ColorBox key={color} color={color} />
      ))}
    </div>
  );
};
export default ColorPicker;