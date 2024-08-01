import React, { useState } from 'react';
import './Game.scss';

function Game() {
  const [pointsA, setPointsA] = useState(1);
  const [pointsB, setPointsB] = useState(1);
  const [status, setStatus] = useState('Same point');

  const addPoint = () => {
    const isA = Math.random() < 0.5;
    if (isA) {
      setPointsA(prevPointsA => {
        const newPointsA = prevPointsA + 1;
        updateStatus(newPointsA, pointsB);
        return newPointsA;
      });
    } else {
      setPointsB(prevPointsB => {
        const newPointsB = prevPointsB + 1;
        updateStatus(pointsA, newPointsB);
        return newPointsB;
      });
    }
  };

  const resetGame = () => {
    setPointsA(1);
    setPointsB(1);
    setStatus('Same point');
  };

  const updateStatus = (pointsA, pointsB) => {
    if (pointsA > pointsB) {
      setStatus('A is winning');
    } else if (pointsA < pointsB) {
      setStatus('B is winning');
    } else {
      setStatus('Same point');
    }
  };

  return (
    <div className="game-container">
      <h1>{status}</h1>
      <div className="character-container">
        <h2>Character A</h2>
        <div className="points-container">
          <div className="points-boxes">
            {Array.from({ length: pointsA }).map((_, index) => (
              <div key={index} className="points-box"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="character-container">
        <h2>Character B</h2>
        <div className="points-container">
          <div className="points-boxes">
            {Array.from({ length: pointsB }).map((_, index) => (
              <div key={index} className="points-box"></div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={addPoint}>Race</button>
      {(pointsA > 1 || pointsB > 1) && <button onClick={resetGame}>Reset</button>}
    </div>
  );
}

export default Game;
