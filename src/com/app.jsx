/**
 * @file com/app.jsx
 */

import React from "react";
import GameProvider from "../ctx/game";
import Header from "./header";
import StateWrapper from "./state-wrapper";

const InnerApp = () => {
  return (
    <main className="main">
      <div className="container">
        <Header />
        <StateWrapper />
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
