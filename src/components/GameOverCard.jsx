import React from "react";

const GameOverCard = ({ score, onRestart }) => {
  return (
    <div className="flex justify-center flex-col items-center bg-white p-4 rounded translate-y-60 w-3/4 translate-x-12">
      <h2 className="text-lg font-bold">Game Over!</h2>
      <p className="text-gray-600">Your score: {score}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
};

export default GameOverCard;
