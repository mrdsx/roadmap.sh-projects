import { createContext, useState } from "react";
import './App.css';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { FlashCards } from "../components/FlashCards/FlashCards";

export const QuestionContext = createContext(null);

export default function App() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="container">
      <h1>Flash cards</h1>
      <QuestionContext.Provider value={[current, setCurrent]}>
        <ProgressBar />
        <FlashCards />
      </QuestionContext.Provider>
    </div>
  )
};
