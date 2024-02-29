import { ResultPropType } from "./types";
import "./result.css";
import { useEffect, useState } from "react";

function Result({ showResult, message, resetValues }: ResultPropType) {
  const [displayResult, setDisplayResult] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (showResult) {
      setDisplayResult(true);
      timer = setTimeout(() => {
        setDisplayResult(false);
        resetValues();
      }, 1000);
    }

    return () => {
      clearTimeout(timer!);
    };
  }, [showResult]);

  return (
    <>
      {displayResult && (
        <div className="fixed top-0 left-0 right-0 m-auto w-fit max-w-7xl">
          <div className="ribbon">
            <strong className="ribbon-content">{message}</strong>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
