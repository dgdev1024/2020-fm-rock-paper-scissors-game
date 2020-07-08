/**
 * @file com/select-state/index.jsx
 */

import React from "react";

const SelectState = ({ requestStateId }) => {
  return (
    <div className="state select-state">
      <h1>Select State</h1>
      <button onClick={() => requestStateId("result")}>Clicky!</button>
    </div>
  );
};

export default SelectState;
