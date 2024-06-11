import React, { useState, useEffect } from "react";
import Background from "./components/Background";
import Bird from "./components/Bird";
import Pipe from "./components/Pipe";
import StartButton from "./components/StartButton";
import GameOverCard from "./components/GameOverCard";

function App() {
  const birdLeft = 150;
  const [birdTop, setBirdTop] = useState(300);
  const [isStart, setIsStart] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (isStart && !gameOver) {
      const fallInterval = setInterval(() => {
        setBirdTop((prevTop) => {
          const newTop = prevTop + 5;
          return newTop >= 575 ? 575 : newTop;
        });
      }, 50);
      return () => clearInterval(fallInterval);
    }
  }, [isStart, gameOver]);

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.code === "Space" && !gameOver) {
        setIsStart(true);
        setBirdTop((prevTop) => {
          const newTop = prevTop - 40;
          return newTop <= 0 ? 0 : newTop;
        });
      }
    };

    const handleTouchStart = () => {
      if (!gameOver) {
        setIsStart(true);
        setBirdTop((prevTop) => {
          const newTop = prevTop - 40;
          return newTop <= 0 ? 0 : newTop;
        });
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [gameOver]);

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleRestart = () => {
    setIsStart(false);
    setBirdTop(300);
    setGameOver(false);
    setScore(0)
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-cyan-500 via-blue-200 to-cyan-700">
      <header className="mb-4 flex items-center justify-between head-width px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg">
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-4xl mr-5"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Flappy Bird
        </h1>
        <h3 className="text-white text-xl flex items-center">
          <span className="mr-2">Score :</span>
          <span className="py-2 px-3 bg-white text-blue-500 rounded-lg shadow-lg animate-pulse">{score}</span>
        </h3>
      </header>
      <Background isStart={isStart} gameOver={gameOver}>
        {!isStart ? (
          !gameOver && <StartButton />
        ) : (
          <>
            <Bird top={birdTop} left={birdLeft} />
            <Pipe
              position="top"
              gameOver={gameOver}
              birdTop={birdTop}
              birdLeft={birdLeft}
              onGameover={handleGameOver}
              setScore={setScore}
            />
            <Pipe
              position="bottom"
              gameOver={gameOver}
              birdTop={birdTop}
              birdLeft={birdLeft}
              onGameover={handleGameOver}
              setScore={setScore}
            />
          </>
        )}
        {gameOver && <GameOverCard score={score} onRestart={handleRestart} />}
      </Background>
    </div>
  );
}

export default App;
