/**
 * @file com/header/index.jsx
 */

import React from "react";
import { useGameContext } from "../../ctx/game";
import "./index.scss";

const Header = () => {
  const { score } = useGameContext();

  return (
    <header className="header">
      <h1 className="heading header__heading">
        Rock
        <br />
        Paper
        <br />
        Scissors
      </h1>
      <div className="header__score-display">
        <p className="header__score-text">Score</p>
        <p className="header__score">{score}</p>
      </div>
    </header>
  );
};

export default Header;
