import { useState } from "react";
import { Board, BoardPropType, GameFinishedFuncParamType } from "./types";
import Tile from "../Tile";
import { InitialBoard } from "./constants";

function PlayingBoard({ handleGameEnd, declaredWinner }: BoardPropType) {
  const [board, setBoard] = useState<Board[]>(
    InitialBoard.map((row) => ({ ...row }))
  );
  const [currentTurnToMark, setCurrentTurnToMark] = useState("X");

  const initializeBoard = () => {
    setCurrentTurnToMark("X");
    setBoard(InitialBoard.map((row) => ({ ...row })));
  };

  const gameFinished = (winner: GameFinishedFuncParamType = "D") => {
    handleGameEnd();
    declaredWinner(winner);
    initializeBoard();
  };

  const checkWinner = () => {
    if (
      board[0].markedBy &&
      board[1].markedBy &&
      board[2].markedBy &&
      board[0].markedBy === board[1].markedBy &&
      board[0].markedBy === board[2].markedBy
    ) {
      gameFinished(board[0].markedBy);
      return;
    }
    if (
      board[0].markedBy &&
      board[3].markedBy &&
      board[6].markedBy &&
      board[0].markedBy === board[3].markedBy &&
      board[0].markedBy === board[6].markedBy
    ) {
      gameFinished(board[0].markedBy);
      return;
    }
    if (
      board[0].markedBy &&
      board[4].markedBy &&
      board[8].markedBy &&
      board[0].markedBy === board[4].markedBy &&
      board[0].markedBy === board[8].markedBy
    ) {
      gameFinished(board[0].markedBy);
      return;
    }
    if (
      board[1].markedBy &&
      board[4].markedBy &&
      board[7].markedBy &&
      board[1].markedBy === board[4].markedBy &&
      board[1].markedBy === board[7].markedBy
    ) {
      gameFinished(board[1].markedBy);
      return;
    }
    if (
      board[2].markedBy &&
      board[5].markedBy &&
      board[8].markedBy &&
      board[2].markedBy === board[5].markedBy &&
      board[2].markedBy === board[8].markedBy
    ) {
      gameFinished(board[2].markedBy);
      return;
    }
    if (
      board[2].markedBy &&
      board[4].markedBy &&
      board[6].markedBy &&
      board[2].markedBy === board[4].markedBy &&
      board[2].markedBy === board[6].markedBy
    ) {
      gameFinished(board[2].markedBy);
      return;
    }
    if (
      board[3].markedBy &&
      board[4].markedBy &&
      board[5].markedBy &&
      board[3].markedBy === board[4].markedBy &&
      board[3].markedBy === board[5].markedBy
    ) {
      gameFinished(board[3].markedBy);
      return;
    }
    if (
      board[6].markedBy &&
      board[7].markedBy &&
      board[8].markedBy &&
      board[6].markedBy === board[7].markedBy &&
      board[6].markedBy === board[8].markedBy
    ) {
      gameFinished(board[6].markedBy);
      return;
    }

    if (board.filter((b) => !b.marked).length < 1) gameFinished();
  };

  const markBoard = (markPlace: number) => {
    if (board[markPlace].marked) return;
    board[markPlace].markedBy = currentTurnToMark;
    board[markPlace].marked = true;
    setBoard([...board]);
    setCurrentTurnToMark(currentTurnToMark === "X" ? "O" : "X");
    checkWinner();
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-rows-3 grid-cols-3 w-80 h-80 gap-0.5 bg-black">
          {board.map((b, index) => (
            <Tile
              key={index}
              marked={b.marked}
              markedBy={b.markedBy}
              handleClick={() => markBoard(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PlayingBoard;
