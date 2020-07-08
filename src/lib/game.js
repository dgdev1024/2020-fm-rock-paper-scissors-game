/**
 * @file lib/game.js
 */

import IconRock from "../com/svg/icon-rock";
import IconPaper from "../com/svg/icon-paper";
import IconScissors from "../com/svg/icon-scissors";

export const Choices = { None: -1, Rock: 0, Paper: 1, Scissors: 2 };
export const Outcomes = [Choices.Scissors, Choices.Rock, Choices.Paper];
export const Images = [IconRock, IconPaper, IconScissors];
export const Result = { Lose: -1, Draw: 0, Win: 1 };
