import "./flashcardnavigation.modules.css";
import { PreviousBtn } from "../PreviousBtn/PreviousBtn";
import { NextBtn } from "../NextBtn/NextBtn";
import { ToggleAnswerBtn } from "../ToggleAnswerBtn/ToggleAnswerBtn"

export function FlashCardNavigation() {
  return (
    <div className="flash-card-nav">
      <PreviousBtn />
      <ToggleAnswerBtn />
      <NextBtn />
    </div>
  );
};