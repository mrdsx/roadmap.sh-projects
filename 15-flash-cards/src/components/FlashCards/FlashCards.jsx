import { createContext, useContext, useState, useEffect } from "react";
import "./flashcards.modules.css";
import { FlashCard } from "../FlashCard/FlashCard";
import { FlashCardNavigation } from "../FlashCardNavigation/FlashCardNavigation";
import { QuestionContext } from "../../app/App";

export const HiddenCardContext = createContext(null);

export function FlashCards() {
  const [hiddenCard, setHiddenCard] = useState("answer");
  const [current] = useContext(QuestionContext);
  
  useEffect(() => {
    if (hiddenCard === "question") setHiddenCard("answer");
  }, [current]);

  return (
    <div className="flash-cards">
      <HiddenCardContext.Provider value={[hiddenCard, setHiddenCard]}>
        <FlashCard />
        <FlashCardNavigation />
      </HiddenCardContext.Provider>
    </div>
  );
};
