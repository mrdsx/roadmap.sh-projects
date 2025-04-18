import { useState, createContext } from "react";
import "./flashcards.modules.css";
import { FlashCard } from "../FlashCard/FlashCard.jsx";
import { FlashCardNavigation } from "../FlashCardNavigation/FlashCardNavigation.jsx";
import questions from "./questions.js";

export const QuestionContext = createContext(null);
export const CurrentQuestionContext = createContext(null);

export function FlashCards() {
  const { current, setCurrent } = useState(1);
  const { question, answer } = questions[1];

  return (
    <div className="flash-cards">
      <QuestionContext.Provider value={[question, answer]}>
        <FlashCard />
      </QuestionContext.Provider>
      <CurrentQuestionContext.Provider value={{current, setCurrent}}>
        <FlashCardNavigation />
      </CurrentQuestionContext.Provider>
    </div>
  );
};