import { useContext } from "react";
import "./flashcard.modules.css";
import { QuestionContext } from "../../app/App";
import { HiddenCardContext } from "../FlashCards/FlashCards";
import questions from "./questions";

export function FlashCard() {
  const [current] = useContext(QuestionContext);
  const { question, answer } = questions[current];

  const [hiddenCard] = useContext(HiddenCardContext);

  const isQuestionHidden = (hiddenCard === "question") ? "hidden" : "";
  const isAnswerHidden = (hiddenCard === "answer") ? "hidden" : "";

  return (
    <>
      <div className={`flash-card question ${isQuestionHidden}`}>
        <h1>{question}</h1>
      </div>
      <div className={`flash-card answer ${isAnswerHidden}`}>
        <p>{answer}</p>
      </div>
    </>
  );
};