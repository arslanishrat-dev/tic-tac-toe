import { Board, Player } from "./types";

export const InitialBoard: Board[] = [
  { id: 1, markedBy: null, marked: false }, // 123, 456, 789, 147, 258, 369, 159, 357
  { id: 2, markedBy: null, marked: false }, // 012, 345, 678, 036, 147, 258, 048, 246
  { id: 3, markedBy: null, marked: false },
  { id: 4, markedBy: null, marked: false },
  { id: 5, markedBy: null, marked: false },
  { id: 6, markedBy: null, marked: false },
  { id: 7, markedBy: null, marked: false },
  { id: 8, markedBy: null, marked: false },
  { id: 9, markedBy: null, marked: false },
];

export const players: Player = {
  X: "player 1",
  O: "player 2",
};
