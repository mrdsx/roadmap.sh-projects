import { useContext, useState } from "react";
import { HiddenCardContext } from "../FlashCards/FlashCards";

export function ToggleAnswerBtn() {
  const [hiddenCard, setHiddenCard] = useContext(HiddenCardContext);
  const [btnContent, setBtnContent] = useState("Show answer");
  
  function toggleAnswer() {
    if (hiddenCard === "answer") {
      setHiddenCard("question");
      setBtnContent("Hide answer");
    } else {
      setHiddenCard("answer");
      setBtnContent("Show answer");
    }
  };

  return <button className="toggle-answer" onClick={toggleAnswer}>{btnContent}</button>;
};