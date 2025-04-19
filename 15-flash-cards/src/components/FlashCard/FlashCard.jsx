import { useContext } from "react";
import "./flashcard.modules.css";
import { QuestionContext } from "../../app/App";
import { HiddenCardContext } from "../FlashCards/FlashCards";
import questions from "./questions";

export function FlashCard() {
  const [current] = useContext(QuestionContext);
  const { question, answer } = questions[current];

  const [hiddenCard] = useContext(HiddenCardContext);

  return (
    <div className="flash-card">
      {(hiddenCard === "answer") ? <h1>{question}</h1> : <h3>{answer}</h3>}
    </div>
  );
};