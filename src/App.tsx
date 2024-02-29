import { useState } from "react";
import PlayingBoard from "./components/PlayingBoard";
import Result from "./components/Result";
import Stats from "./components/Stats";
import { WinnerType } from "./types";

function App() {
  const [gameFinished, setGameFinised] = useState(false);
  const [winnerPlayer, setWinnerPlayer] = useState<WinnerType>(null);

  const resetStates = () => {
    setGameFinised(false);
    setWinnerPlayer(null);
  };

  return (
    <>
      <Stats winner={winnerPlayer} />
      <PlayingBoard
        handleGameEnd={() => setGameFinised(true)}
        declaredWinner={(e: WinnerType) => setWinnerPlayer(e)}
      />
      {winnerPlayer && winnerPlayer !== "D" && (
        <Result
          showResult={gameFinished}
          message={`Congratulations! ${winnerPlayer} wins the game`}
          resetValues={() => resetStates()}
        />
      )}
    </>
  );
}

export default App;
