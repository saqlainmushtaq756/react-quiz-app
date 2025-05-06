import React, { useContext } from "react";
import { QuizContext } from "../context/QuizHolder";

const Start = () => {
  const { setStart } = useContext(QuizContext);
  return (
    <>
      <div className="bg-blue-300 flex items-center justify-center h-screen w-full">
        <button
          className="border border-orange-500 p-2 text-2xl rounded"
          onClick={() => setStart(true)}
        >
          Start
        </button>
      </div>
    </>
  );
};

export default Start;
