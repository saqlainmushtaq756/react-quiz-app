import "./App.css";
import Quiz from "./components/Quiz";
// import Result from "./components/Result";
import Start from "./components/Start";
import { useContext } from "react";
import { QuizContext } from "./context/QuizHolder";
import Result from "./components/Result";
function App() {
  const { start, exit } = useContext(QuizContext);

  // const {  exit } = useContext(QuizContext);
  return (
    <>
      {exit === false ? (
        <>{start === true ? <Quiz /> : <Start />}</>
      ) : (
        <>
          <Result />
        </>
      )}

      {/* <Result /> */}
    </>
  );
}

export default App;
