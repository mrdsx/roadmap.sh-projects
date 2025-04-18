import { useContext } from "react";
import "./progressbar.modules.css";
import { QuestionContext } from "../../app/App";

export function ProgressBar() {
  const [current] = useContext(QuestionContext);
  const styles = {
    width: `${current / 5 * 100}%`,
  };

  return (
    <div className="progress">
      <div className="progress-bar" style={styles}></div>
      <div className="fraction">{current} of 5</div>
    </div>
  )
}