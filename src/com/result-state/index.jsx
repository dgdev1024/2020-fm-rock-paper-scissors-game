/**
 * @file com/result-state/index.jsx
 */

import React, { useState, useEffect } from "react";
import SelectChoice from "../select-choice";
import { useGameContext } from "../../ctx/game";
import "./index.scss";
import { Result } from "../../lib/game";

const ResultState = ({ requestStateId }) => {
  const { playerChoiceId, houseChoiceId, determineResult } = useGameContext();
  const [houseChoiceHidden, setHouseChoiceHidden] = useState(true);
  const [outcome, setOutcome] = useState(-2);

  useEffect(() => {
    setTimeout(() => setHouseChoiceHidden(false), 500);
    setTimeout(() => {
      setOutcome(determineResult());
    }, 1000);
  }, []);

  const printOutcome = () => {
    switch (outcome) {
      case Result.Lose:
        return "You Lose";
      case Result.Draw:
        return "It's a Draw";
      case Result.Win:
        return "You Win";
      default:
        return "";
    }
  };

  const onPlayAgainClicked = () => {
    requestStateId("select");
  };

  return (
    <div className="state result-state">
      <div className="result-state__player-choice">
        <SelectChoice index={playerChoiceId} />
        <p className="result-state__player-choice-text">You Picked</p>
      </div>
      <div className="result-state__house-choice">
        <SelectChoice index={houseChoiceId} hidden={houseChoiceHidden} />
        <p className="result-state__house-choice-text">The House Picked</p>
      </div>
      <div
        className={`result-state__outcome ${
          outcome === -2 && "result-state__outcome--hidden"
        }`}
      >
        <p className="result-state__outcome-text">{printOutcome()}</p>
        <button
          onClick={onPlayAgainClicked}
          className="result-state__outcome-play-again"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultState;
