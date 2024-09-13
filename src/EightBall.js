import React, { useState } from 'react';

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [count, setCount] = useState({ green: 0, goldenrod: 0, red: 0 });

  const handleClick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMsg(randomAnswer.msg);
    setColor(randomAnswer.color);
    setCount((prevCount) => ({
      ...prevCount,
      [randomAnswer.color]: prevCount[randomAnswer.color] + 1,
    }));
  };

  const reset = () => {
    setMsg("Think of a Question");
    setColor("black");
    setCount({ green: 0, goldenrod: 0, red: 0 });
  };

  const style = {
    backgroundColor: color,
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    fontSize: '20px',
    cursor: 'pointer',
    margin: '20px auto',
  };

  return (
    <div>
      <div style={style} onClick={handleClick}>
        {msg}
      </div>
      <button onClick={reset}>Reset</button>
      <div>
        <p>Green count: {count.green}</p>
        <p>Goldenrod count: {count.goldenrod}</p>
        <p>Red count: {count.red}</p>
      </div>
    </div>
  );
}

export default EightBall;
