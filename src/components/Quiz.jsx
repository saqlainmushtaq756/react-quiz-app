import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizHolder";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  // console.log("current value is", current);

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <Box current={current} handler={setCurrent} />
      </div>
    </>
  );
}

const Box = ({ current, handler }) => {
  const { questions, correctAnswer, setCorrectAnswer, setExit } =
    useContext(QuizContext);

  const [answer, setAnswer] = useState("");

  const EqualAnswer = questions[current].correct === answer;

  const handleSave = () => {
    if (EqualAnswer) {
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
      <div className="flex flex-col h-full w-screen justify-center items-center gap-1 bg-gray-700 text-white">
        <h1 className="text-4xl transform-border m-3 text-orange-500">
          Best of Luck Buddy 😍
        </h1>
        <div className=" w-[40%] h-[20%] border shadow-2xl overflow-hidden px-[10px]   rounded-2xl">
          <div className="p-2  ">
            <h1 className="text-2xl font-[luckiest]">
              <span> {` ${current + 1}) `}</span> {questions[current]?.question}
            </h1>
          </div>
          <div className="options grid grid-cols-2 ">
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
        </div>
        <div className="endBtn w-[40%] flex justify-between items-center p-2 ">
          <div
            className="h-[30px] text-white px-3 bg-amber-700 hover:bg-black hover:text-white cursor-pointer"
            onClick={() => setAnswer("")}
          >
            Reset
          </div>
          {answer && (
            <div
              className="h-[30px] text-white px-3 bg-green-700 hover:bg-black hover:text-white cursor-pointer"
              onClick={handleSave}
            >
              Save & Next
            </div>
          )}

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
