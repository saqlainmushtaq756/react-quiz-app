// Countdown.js
import React, { useEffect, useState, useContext } from "react";
import { QuizContext } from "./QuizContext";

const Countdown = () => {
  const [seconds, setSeconds] = useState(5);
  const { setShowQuiz } = useContext(QuizContext);

  useEffect(() => {
    if (seconds === 0) {
      setShowQuiz(true); // Quiz show when the countdown is 0
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, setShowQuiz]);

  return (
    <div className="text-3xl text-center mt-10">Starting in: {seconds}s</div>
  );
};

export default Countdown;
