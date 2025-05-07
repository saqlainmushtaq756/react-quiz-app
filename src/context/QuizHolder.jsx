import React, { useState } from "react";
import { createContext } from "react";

const QuizContext = createContext();

const questions = [
  {
    question: "Pakistan ka capital kya hai?",
    a: "Lahore",
    b: "Karachi",
    c: "Islamabad",
    d: "Quetta",
    correct: "c",
  },
  {
    question: "Allama Iqbal kaun thay?",
    a: "Scientist",
    b: "Poet",
    c: "Politician",
    d: "Teacher",
    correct: "b",
  },
  {
    question: "Quaid-e-Azam ka asal naam kya tha?",
    a: "Mohammad Ali Jinnah",
    b: "Liaquat Ali Khan",
    c: "Ayub Khan",
    d: "Zulfikar Bhutto",
    correct: "a",
  },
  // {
  //   question: "Pakistan kis din azad hua tha?",
  //   a: "23 March",
  //   b: "14 August",
  //   c: "15 August",
  //   d: "6 September",
  //   correct: "b",
  // },
  // {
  //   question: "Sab se bara continent konsa hai?",
  //   a: "Africa",
  //   b: "Asia",
  //   c: "Europe",
  //   d: "Australia",
  //   correct: "b",
  // },
  // {
  //   question: "Computer ka brain kise kehte hain?",
  //   a: "Monitor",
  //   b: "CPU",
  //   c: "Mouse",
  //   d: "Keyboard",
  //   correct: "b",
  // },
  // {
  //   question: "H2O kis cheez ka formula hai?",
  //   a: "Carbon",
  //   b: "Oxygen",
  //   c: "Hydrogen",
  //   d: "Water",
  //   correct: "d",
  // },
  // {
  //   question: "Islam ka pehla pillar kya hai?",
  //   a: "Namaz",
  //   b: "Zakat",
  //   c: "Shahada",
  //   d: "Roza",
  //   correct: "c",
  // },
  // {
  //   question: "Battery kis energy se kaam karti hai?",
  //   a: "Solar",
  //   b: "Heat",
  //   c: "Chemical",
  //   d: "Magnetic",
  //   correct: "c",
  // },
  // {
  //   question: "Suraj kis side se nikalta hai?",
  //   a: "North",
  //   b: "West",
  //   c: "South",
  //   d: "East",
  //   correct: "d",
  // },
  // {
  //   question: "Urdu kis mulk ki national language hai?",
  //   a: "Bangladesh",
  //   b: "India",
  //   c: "Pakistan",
  //   d: "Nepal",
  //   correct: "c",
  // },
  // {
  //   question: "Pakistan ka national animal kya hai?",
  //   a: "Lion",
  //   b: "Tiger",
  //   c: "Markhor",
  //   d: "Elephant",
  //   correct: "c",
  // },
  // {
  //   question: "Earth ka natural satellite kya hai?",
  //   a: "Mars",
  //   b: "Moon",
  //   c: "Venus",
  //   d: "Sun",
  //   correct: "b",
  // },
  // {
  //   question: "Nile kis continent mein hai?",
  //   a: "Africa",
  //   b: "Asia",
  //   c: "Europe",
  //   d: "Australia",
  //   correct: "a",
  // },
  // {
  //   question: "Oxygen ka symbol kya hai?",
  //   a: "O2",
  //   b: "O",
  //   c: "Ox",
  //   d: "Oxy",
  //   correct: "b",
  // },
  // {
  //   question: "Human body mein kitni haddiyan hoti hain?",
  //   a: "210",
  //   b: "205",
  //   c: "206",
  //   d: "208",
  //   correct: "c",
  // },
  // {
  //   question: "World War 2 kis saal khatam hui?",
  //   a: "1939",
  //   b: "1945",
  //   c: "1950",
  //   d: "1940",
  //   correct: "b",
  // },
  // {
  //   question: "Tim Berners-Lee kis cheez ke liye mashhoor hain?",
  //   a: "Mobile",
  //   b: "Internet",
  //   c: "Facebook",
  //   d: "Computer",
  //   correct: "b",
  // },
  // {
  //   question: "Namaz rozana kitni martaba farz hai?",
  //   a: "3",
  //   b: "4",
  //   c: "5",
  //   d: "6",
  //   correct: "c",
  // },
  // {
  //   question: "Roza kis mahine mein farz hota hai?",
  //   a: "Muharram",
  //   b: "Rabi-ul-Awal",
  //   c: "Shaban",
  //   d: "Ramzan",
  //   correct: "d",
  // },
];

const QuizHolder = (props) => {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  return (
    <>
      <QuizContext.Provider
        value={{
          start,
          setStart,
          exit,
          setExit,
          questions,
          correctAnswer,
          setCorrectAnswer,
        }}
      >
        {props.children}
      </QuizContext.Provider>
    </>
  );
};

export default QuizHolder;
export { QuizContext };
