import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import QuizContext from "./context/QuizHolder.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizContext>
      <App />
    </QuizContext>
  </StrictMode>
);
