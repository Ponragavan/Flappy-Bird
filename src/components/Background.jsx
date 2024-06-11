import React, { useState, useEffect } from 'react';

const Background = ({ children, isStart, gameOver }) => {
  const [bgPosition, setBgPosition] = useState(0);
  const movementSpeed = 4;

  useEffect(() => {
    if (isStart && !gameOver) {
      const moveInterval = setInterval(() => {
        setBgPosition((prevPosition) => (prevPosition - movementSpeed) % 360);
      }, 32);

      return () => clearInterval(moveInterval);
    }
  }, [isStart, gameOver]);

  return (
    <div className="bg-image overflow-hidden bg-position border-2 border-black rounded-xl relative" style={{backgroundPositionX : `${bgPosition}px`}}>{children}</div>
  );
};

export default Background;
