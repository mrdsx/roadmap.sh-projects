import './App.css';
import { ProgressBar } from '../components/ProgressBar/ProgressBar.jsx';
import { FlashCards } from "../components/FlashCards/FlashCards.jsx";

export default function App() {
  return (
    <div className="container">
      <h1>Flash cards</h1>
      <ProgressBar />
      <FlashCards />
    </div>
  )
};
