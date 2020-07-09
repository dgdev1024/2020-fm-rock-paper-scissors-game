/**
 * @file com/select-state/index.jsx
 */

import React from "react";
import SelectChoice from "../select-choice";
import { useGameContext } from "../../ctx/game";
import { Choices } from "../../lib/game";
import "./index.scss";

const SelectState = ({ requestStateId }) => {
  const { setPlayerChoiceId, generateHouseChoiceId } = useGameContext();

  const selectChoice = (index) => {
    setPlayerChoiceId(index);
    generateHouseChoiceId();
    requestStateId("result");
  };

  return (
    <div className="state select-state">
      <SelectChoice index={Choices.Paper} selectChoice={selectChoice} />
      <SelectChoice index={Choices.Scissors} selectChoice={selectChoice} />
      <SelectChoice index={Choices.Rock} selectChoice={selectChoice} />
    </div>
  );
};

export default SelectState;
