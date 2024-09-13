import React, { useState } from 'react';

function ColorBoxes({ numBoxes = 16, colors = ["red", "green", "blue", "purple", "orange"] }) {
  const [boxes, setBoxes] = useState(Array.from({ length: numBoxes }, () => randomColor()));

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleClick = () => {
    const randomIdx = Math.floor(Math.random() * numBoxes);
    setBoxes((boxes) =>
      boxes.map((box, idx) => (idx === randomIdx ? randomColor() : box))
    );
  };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 100px)", gap: "10px" }}>
        {boxes.map((color, idx) => (
          <div key={idx} style={{ width: "100px", height: "100px", backgroundColor: color }} />
        ))}
      </div>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default ColorBoxes;
