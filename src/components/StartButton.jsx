import React from "react";

const StartButton = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center translate-y-60">
      <img src="bird.png" alt="bird" width={70} />
      <p className="mt-2 text-center text-gray-600 max-[500px]:hidden">Press space bar to play the game.</p>
      <p className="mt-2 text-center text-gray-600 min-[500px]:hidden">Tap anywhere to play the game.</p>
    </div>
  );
};

export default StartButton;
