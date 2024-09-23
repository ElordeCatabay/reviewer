import React, { useState } from 'react';
import Flashcard from './Flashcard';
import flashcardsData from './flashcardsData';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextCard = () => {
    if (currentIndex < flashcardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Optionally, reset to first card or display a completion message
      setCurrentIndex(0);
    }
  };

  const goToPreviousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="App">
      <h1>Identification Quiz</h1>
      <Flashcard
        question={flashcardsData[currentIndex].question}
        answer={flashcardsData[currentIndex].answer}
      />
      <div className="navigation">
        <button onClick={goToPreviousCard} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={goToNextCard}>
          {currentIndex === flashcardsData.length - 1 ? 'Restart' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default App;
