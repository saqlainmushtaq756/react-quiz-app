import React, { useContext } from "react";
import { QuizContext } from "../context/QuizHolder";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Result = () => {
  const { correctAnswer, setExit, setStart, questions } =
    useContext(QuizContext);
  const playagain = () => {
    setStart(false);
    setExit(false);
  };

  const { width, height } = useWindowSize();

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full bg-gray-700 text-white">
        <div className="w-[30%]  h-[40%] border border-amber-50  shadow-inner  rounded-2xl overflow-hidden text-center flex items-center flex-col  justify-center">
          <h1 className="font-[luckiest] text-2xl mb-3">
            Congratulation ✨🎉✨✨🎊
          </h1>
          <h1 className="text-2xl">
            {`${correctAnswer || 0} are the correct out of ${questions.length}`}
          </h1>
          <button
            className="border border-orange-500 p-2 text-2xl rounded m-2"
            onClick={playagain}
          >
            Play Again
          </button>
        </div>
      </div>
      <Confetti width={width} height={height} tweenDuration={500} />
    </>
  );
};

export default Result;
