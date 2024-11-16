import React, { useEffect, useState } from "react";
import "./random.css";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [typeOf, setTypeOf] = useState('hex');

  // Function to generate random HEX color - #569325
  const handleRandomHex = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * 16)];
    }
    setColor(hexColor);
    console.log(hexColor);
  };
  //Function to generate RGB color - red, green, blue
  const handleRandomRGB = () => {
     const r = Math.floor(Math.random() * 255);
     const g = Math.floor(Math.random() * 255);
     const b = Math.floor(Math.random() * 255);
     setColor(`rgb(${r}, ${g}, ${b})`);
     console.log(`rgb(${r}, ${g}, ${b})`);
  }

  //UseEffect - automatically update typeof when you switch between buttons
  useEffect(() =>{
  typeOf === 'rgb' ?  handleRandomRGB() :  handleRandomHex()
  }, [typeOf]);

  return (
    <div className="color-container" style={{ backgroundColor: color }}>
      <div className="btn-container">
      <button onClick = {() => setTypeOf('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOf('rgb')}>Create RGB Color</button>
      <button onClick={ typeOf === 'hex' ?
        handleRandomHex : handleRandomRGB }> Generate Random Color </button>
        </div>
      <div className="color-wrapper">
        <h3>{typeOf === 'hex' ? 'Hex Color' : 'RGB Color'}</h3>
        <h2>{color}</h2>
      </div>  
    </div>
  );
};

export default RandomColor;
