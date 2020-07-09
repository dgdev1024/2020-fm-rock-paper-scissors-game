/**
 * @file com/app.jsx
 */

import React from "react";
import GameProvider from "../ctx/game";
import Header from "./header";
import StateWrapper from "./state-wrapper";
import Rules from "./rules";

const InnerApp = () => {
  return (
    <main className="main">
      <div className="container">
        <Header />
        <StateWrapper />
        <Rules />
      </div>
    </main>
  );
};

const AppStructure = () => (
  <GameProvider>
    <InnerApp />
  </GameProvider>
);

export default AppStructure;
