import { useState } from "react";
import "./progressbar.modules.css";

export function ProgressBar() {
  

  return (
    <div className="progress">
      <div className="progress-bar"></div>
      <div className="fraction">1 of 5</div>
    </div>
  )
}