/**
 * @file com/select-choice/index.jsx
 */

import React from "react";
import { ClassNames, Images } from "../../lib/game";
import "./index.scss";

const SelectChoice = ({
  index,
  hidden = false,
  tabbable = true,
  winner = false,
  selectChoice = () => {},
} = {}) => {
  const IconComponent = Images[index];

  const onKeyDown = (ev) => {
    if (ev.key === " " || ev.key === "Enter" || ev.key === "Spacebar") {
      selectChoice(index);
    }
  };

  return (
    <div
      className={`select-choice select-choice--${ClassNames[index]} ${
        hidden && "select-choice--hidden"
      } ${winner && "select-choice--winner"}`}
      onClick={() => selectChoice(index)}
      onKeyDown={onKeyDown}
      aria-label={ClassNames[index]}
      role="button"
      tabIndex={tabbable ? index : -1}
    >
      <div className="select-choice__svg-container">
        <IconComponent className="select-choice__svg" />
      </div>
    </div>
  );
};

export default SelectChoice;
