import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  //function for generating a random hex color code
  const handleButtonClick = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let code = "#";
    for (let i = 0; i < 6; i++) {
      const ran = hex[Math.floor(Math.random() * hex.length)];
      code += ran;
    }
    setColor(code);
  };
  const handleTextButtonClick = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let code = "#";
    for (let i = 0; i < 6; i++) {
      const ran = hex[Math.floor(Math.random() * hex.length)];
      code += ran;
    }
    setTextColor(code);
  };
  //background will change with the change of color 
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="App">
      <h1>Color Changer</h1>
      <h3 className="Board">Click Bchange to change background and click on Tchange to change the text</h3>
      <h3>Current background color is {color} </h3>
      <h3 style={{ color: textColor }}>Current text color is {textColor}</h3>
      <button onClick={handleButtonClick}>Bchange</button>
      <button onClick={handleTextButtonClick}>Tchange</button>
    </div>
  );
}
