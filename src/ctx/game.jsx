/**
 * @file ctx/game.jsx
 */

import React, { useState, useContext } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { Choices, Outcomes, Result } from "../lib/game";
import { getRandomInt } from "../lib/random";

const GameContext = React.createContext();
const GameProvider = ({ children }) => {
  const [score, setScore] = useLocalStorage("--fm-rps-score", 0);
  const [playerChoiceId, setPlayerChoiceId] = useState(Choices.None);
  const [houseChoiceId, setHouseChoiceId] = useState(Choices.None);

  const gainPoint = () => setScore((score) => score + 1);

  const losePoint = () =>
    setScore((score) => (score === 0 ? score : score - 1));

  const generateHouseChoiceId = () => setHouseChoiceId(getRandomInt(0, 2));

  const determineResult = () => {
    if (Outcomes[playerChoiceId] === houseChoiceId) {
      // You win.
      gainPoint();
      return Result.Win;
    } else if (playerChoiceId === houseChoiceId) {
      // It's a draw.
      return Result.Draw;
    } else {
      // The house wins.
      losePoint();
      return Result.Lose;
    }
  };

  return (
    <GameContext.Provider
      value={{
        score,
        playerChoiceId,
        houseChoiceId,
        setPlayerChoiceId,
        generateHouseChoiceId,
        determineResult,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
export const useGameContext = () => useContext(GameContext);
