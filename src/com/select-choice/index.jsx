/**
 * @file com/select-choice/index.jsx
 */

import React from "react";
import { ClassNames, Images } from "../../lib/game";
import "./index.scss";

const SelectChoice = ({
  index,
  hidden = false,
  selectChoice = () => {},
} = {}) => {
  const IconComponent = Images[index];

  return (
    <div
      className={`select-choice select-choice--${ClassNames[index]} ${
        hidden && "select-choice--hidden"
      }`}
      onClick={() => selectChoice(index)}
      aria-label={ClassNames[index]}
    >
      <div className="select-choice__svg-container">
        <IconComponent className="select-choice__svg" />
      </div>
    </div>
  );
};

export default SelectChoice;
