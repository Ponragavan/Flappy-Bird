import React, { useEffect, useState } from "react";

const Pipe = ({
  position,
  birdTop,
  birdLeft,
  gameOver,
  onGameover,
  setScore,
}) => {
  const [pipeLeft, setPipeLeft] = useState(350);
  const [topHeight, setTopHeight] = useState(150);
  const [bottomHeight, setBottomHeight] = useState(300);
  const [updatedScore, setUpdatedScore] = useState(0);
  const pipeWidth = 56; // Corrected width of the pipe image
  const pipeGap = 130; // Vertical gap between top and bottom pipes
  const birdSize = 28; // Size of the bird
  const gameHeight = 600; // Height of the game area

  useEffect(() => {
    if (!gameOver) {
      const moveInterval = setInterval(() => {
        setPipeLeft((prevLeft) => prevLeft - 4);
      }, 32);
      return () => clearInterval(moveInterval);
    }
  }, [gameOver]);

  useEffect(() => {
    if (pipeLeft < -pipeWidth) {
      setTopHeight(Math.floor(Math.random() * (220 - 150) + 150));
      setBottomHeight(600 - topHeight - pipeGap);
      setPipeLeft(350);
      setUpdatedScore((prev) => prev + 1);
      }
      }, [pipeLeft]);
      
      useEffect(() => {
    setScore(updatedScore);
    const isCollision = checkCollision();
    if (isCollision) {
      handleGameOver();
    }
  }, [birdTop]);

  const checkCollision = () => {
    const birdBottom = birdTop + birdSize;
    const pipeRight = pipeLeft + pipeWidth;
    const birdRight = birdLeft + birdSize;

    const topCollision =
      birdLeft < pipeRight && birdRight >= pipeLeft && birdTop < topHeight - 8;
    const bottomCollision =
      birdLeft <= pipeRight &&
      birdRight >= pipeLeft &&
      birdBottom > gameHeight - bottomHeight + 10;

    return topCollision || bottomCollision;
  };

  const handleGameOver = () => {
    onGameover();
  };

  return (
    <div
      className={`pipe bg-pipe w-14 bg-no-repeat absolute ${
        position === "top" ? "top-0 rotate-180" : "bottom-0"
      }`}
      style={{
        left: `${pipeLeft}px`,
        height: `${position === "top" ? topHeight : bottomHeight}px`,
      }}
    ></div>
  );
};

export default Pipe;
