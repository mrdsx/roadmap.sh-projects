import { createContext, useContext, useState, useEffect } from "react";
import "./flashcards.modules.css";
import { FlashCard } from "../FlashCard/FlashCard";
import { FlashCardNavigation } from "../FlashCardNavigation/FlashCardNavigation";
import { QuestionContext } from "../../app/App";

export const HiddenCardContext = createContext(null);
export const AnswerBtnContentContext = createContext(null);

export function FlashCards() {
  const [hiddenCard, setHiddenCard] = useState("answer");
  const [current] = useContext(QuestionContext);
  
  const [btnContent, setBtnContent] = useState("Show answer");

  useEffect(() => {
    if (hiddenCard === "question") {
      setHiddenCard("answer");
      setBtnContent("Show answer");
    };
  }, [current]);

  return (
    <div className="flash-cards">
      <HiddenCardContext.Provider value={[hiddenCard, setHiddenCard]}>
        <FlashCard />
        <AnswerBtnContentContext.Provider value={[btnContent, setBtnContent]}>
          <FlashCardNavigation />
        </AnswerBtnContentContext.Provider>
      </HiddenCardContext.Provider>
    </div>
  );
};
