import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null); // null means no answer yet
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
      setIsCorrect(true);
      setShowAnswer(false); // No need to show the correct answer if the user is correct
    } else {
      setIsCorrect(false);
      setShowAnswer(true); // Show the correct answer if the user is wrong
    }
  };

  return (
    <div className="flashcard">
      <h3>{question}</h3>
      
      {/* Answer Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Show feedback */}
      {isCorrect === true && <p style={{ color: 'green' }}>Correct!</p>}
      {isCorrect === false && (
        <p style={{ color: 'red' }}>
          Wrong! The correct answer is: <strong>{answer}</strong>
        </p>
      )}
    </div>
  );
};

export default Flashcard;
