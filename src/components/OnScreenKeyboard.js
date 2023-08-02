
import React from 'react';
import './OnScreenKeyboard.css';

const OnScreenKeyboard = ({ onKeyClick }) => {
  const rows = [
    'ABCEDFGHIJKLM',
    'NOPQRSTUVWXYZ',
    '0123456789', 
    '!@#$%^&*()', 
  ];

  const specialRow = ['SPACE', 'CLEAR'];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.split('').map((char, charIndex) => (
            <button key={charIndex} onClick={() => onKeyClick(char)}>
              {char}
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        {specialRow.map((char, charIndex) => (
          <button key={charIndex} onClick={() => onKeyClick(char)}>
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OnScreenKeyboard;
