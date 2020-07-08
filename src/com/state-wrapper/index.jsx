/**
 * @file com/state-wrapper/index.jsx
 */

import React, { useState, useEffect, useRef } from "react";
import SelectState from "../select-state";
import ResultState from "../result-state";
import "./index.scss";

const States = {
  select: SelectState,
  result: ResultState,
};

const StateWrapper = () => {
  const [currentStateId, setCurrentStateId] = useState("select");
  const [requestedStateId, requestStateId] = useState("select");
  const stateWrapperRef = useRef(null);
  const StateComponent = States[currentStateId];

  useEffect(() => {
    if (currentStateId === requestedStateId) {
      return;
    }

    const onAnimationFinished = (ev) => {
      const { animationName } = ev;
      if (animationName === "state-wrapper-fade-out") {
        setCurrentStateId(requestedStateId);
      }
    };

    const element = stateWrapperRef.current;
    element.addEventListener("animationend", onAnimationFinished);
    return () =>
      element.removeEventListener("animationend", onAnimationFinished);
  }, [requestedStateId]);

  return (
    <div
      ref={stateWrapperRef}
      className={`state-wrapper state-wrapper--${currentStateId} ${
        requestedStateId !== currentStateId
          ? "state-wrapper--fade-out"
          : "state-wrapper--fade-in"
      }`}
    >
      <StateComponent requestStateId={requestStateId} />
    </div>
  );
};

export default StateWrapper;
