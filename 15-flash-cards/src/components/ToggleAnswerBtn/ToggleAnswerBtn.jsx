import { useContext } from "react";
import { HiddenCardContext, AnswerBtnContentContext } from "../FlashCards/FlashCards";

export function ToggleAnswerBtn() {
  const [hiddenCard, setHiddenCard] = useContext(HiddenCardContext);
  const [btnContent, setBtnContent] = useContext(AnswerBtnContentContext);
  
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