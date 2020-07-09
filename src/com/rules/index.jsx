/**
 * @file com/rules/index.jsx
 */

import React, { useState } from "react";
import ImageRules from "../../img/image-rules.svg";
import IconClose from "../svg/icon-close";
import "./index.scss";

const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <button onClick={() => setShowRules(true)} className="rules-button">
        Rules
      </button>
      <div className={`rules-modal ${showRules && "rules-modal--visible"}`}>
        <div className="rules-modal__container">
          <p className="rules-modal__text">Rules</p>
          <img
            src={ImageRules}
            alt="Rock Paper Scissors Rules"
            className="rules-modal__image"
          />
          <button
            onClick={() => setShowRules(false)}
            className="rules-modal__close"
            aria-label="Close Rules Window"
          >
            <IconClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default Rules;
