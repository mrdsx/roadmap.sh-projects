import { useContext } from "react";
import "./flashcardnavigation.modules.css";
import { CurrentQuestionContext } from "../FlashCards/FlashCards";

export function FlashCardNavigation() {
  const { current, setCurrent } = useContext(CurrentQuestionContext);

  function changeCurrent() {
    setCurrent(cur => cur + 1);
    console.log(current);
  }

  return (
    <div className="flash-card-nav">
      <button className="previous" onClick={changeCurrent}>
        <img src="./chevron-down.svg" alt="" />
        <span>Previous</span>
      </button>
      <h2>Show answer</h2>
      <button className="next">
        <span>Next</span>
        <img src="./chevron-down.svg" alt="" />
      </button>
    </div>
  );
};