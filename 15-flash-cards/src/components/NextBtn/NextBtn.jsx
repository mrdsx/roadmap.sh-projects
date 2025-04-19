import { useContext } from "react";
import { QuestionContext } from "../../app/App";

export function NextBtn() {
  const [current, setCurrent] = useContext(QuestionContext);

  function incrementCurrent() {
    if (current < 5) {
      setCurrent(cur => cur + 1);
    } else {
      setCurrent(1);
    };
  };

  return (
    <button className="next" onClick={incrementCurrent}>
      <span>Next</span>
      <img src="./chevron-down.svg" alt="" />
    </button>
  );
};