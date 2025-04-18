import { useContext } from "react";
import "./flashcard.modules.css";
import { QuestionContext } from "../FlashCards/FlashCards.jsx";

export function FlashCard() {
  const [question, answer] = useContext(QuestionContext);

  return (
    <>
      <div className="flash-card question">
        <h1>{question}</h1>
      </div>
      <div className="flash-card answer">
        <p>{answer}</p>
      </div>
    </>
  );
};