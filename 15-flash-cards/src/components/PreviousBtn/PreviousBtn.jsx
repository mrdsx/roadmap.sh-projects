import { useContext } from "react";
import { QuestionContext } from "../../app/App";

export function PreviousBtn() {
  const [current, setCurrent] = useContext(QuestionContext);

  function decrementCurrent() {
    if (current > 1) {
      setCurrent(cur => cur - 1);
    };
  };
  
  return (
    <button className="previous" onClick={decrementCurrent}>
      <img src="./chevron-down.svg" alt="" />
      <span>Previous</span>
    </button>
  )
}