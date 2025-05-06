import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizHolder";

export default function Quiz() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="bg-blue-300 flex items-center justify-center h-screen w-full">
        <Box current={current} handler={setCurrent} />
      </div>
    </>
  );
}

const Box = ({ current, handler }) => {
  const { questions, correctAnswer, setCorrectAnswer, setExit } =
    useContext(QuizContext);

  const [answer, setAnswer] = useState("");
  const handleSave = () => {
    if (questions[current].correct === answer) {
      setCorrectAnswer(correctAnswer + 1);
    }
    setAnswer("");
    if (current + 1 === questions.length) {
      setExit(true);
    } else {
      handler(current + 1);
    }
  };

  return (
    <>
      <div className="w-[30%]  border border-amber-50 shadow-2xl bg-white rounded overflow-hidden ">
        <div className="text-2xl p-2">
          {` ${current + 1}) `}
          {questions[current]?.question}
        </div>
        <div className="options grid grid-cols-2 mt-3">
          <div
            className={`cursor-pointer p-2 border border-zinc-200 ${
              answer === "a" ? "bg-blue-300 text-white" : ""
            }  hover:bg-blue-300 hover:text-white duration-200`}
            onClick={() => setAnswer("a")}
          >
            {questions[current]?.a}
          </div>
          <div
            className={`cursor-pointer p-2  border border-zinc-200 ${
              answer === "b" ? "bg-blue-300 text-white" : ""
            } hover:bg-blue-300 hover:text-white duration-200`}
            onClick={() => setAnswer("b")}
          >
            {questions[current]?.b}
          </div>
          <div
            className={`cursor-pointer p-2  border border-zinc-200 ${
              answer === "c" ? "bg-blue-300 text-white" : ""
            } hover:bg-blue-300 hover:text-white duration-200`}
            onClick={() => setAnswer("c")}
          >
            {questions[current]?.c}
          </div>
          <div
            className={`cursor-pointer p-2  border border-zinc-200 ${
              answer === "d" ? "bg-blue-300 text-white" : ""
            } hover:bg-blue-300 hover:text-white duration-200`}
            onClick={() => setAnswer("d")}
          >
            {questions[current]?.d}
          </div>
        </div>
        <div className="endBtn flex justify-between items-center  ">
          <div
            className="h-[30px] text-white px-3 bg-amber-700 hover:bg-black hover:text-white cursor-pointer"
            onClick={() => setAnswer("")}
          >
            Reset
          </div>
          <div
            className="h-[30px] text-white px-3 bg-green-700 hover:bg-black hover:text-white cursor-pointer"
            onClick={handleSave}
          >
            Save & Next
          </div>
          <div
            className="h-[30px] text-white px-3 bg-red-700 hover:bg-black hover:text-white cursor-pointer"
            onClick={() => setExit(true)}
          >
            Exit
          </div>
        </div>
      </div>
    </>
  );
};
