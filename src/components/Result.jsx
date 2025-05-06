import React, { useContext } from "react";
import { QuizContext } from "../context/QuizHolder";

const Result = () => {
  const { correctAnswer, setExit, setStart, questions } =
    useContext(QuizContext);
  const playagain = () => {
    setStart(false);
    setExit(false);
  };
  return (
    <>
      <div className="bg-blue-300 flex items-center justify-center h-screen w-full">
        <div className="w-[30%]  border border-amber-50 shadow-2xl bg-white rounded overflow-hidden text-center py-10">
          <h1 className="text-2xl">
            {correctAnswer} are the correct out of {questions.length}
          </h1>
          <button
            className="border border-orange-500 p-2 text-2xl rounded m-2"
            onClick={playagain}
          >
            Play Again
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
