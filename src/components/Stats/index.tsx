import { useEffect, useState } from "react";
import { StatsPropType, StatsType } from "./types";

function Stats({ winner }: StatsPropType) {
  const [stats, setStats] = useState<StatsType>({
    X: 0,
    O: 0,
    D: 0,
  });

  useEffect(() => {
    if (winner) {
      setStats({ ...stats, [winner]: stats[winner as keyof StatsType] + 1 });
    }

    return () => {};
  }, [winner]);

  return (
    <>
      <div className="flex justify-center py-8">
        <div className="flex justify-around w-80">
          <div>
            <p className="text-md">X = {stats.X}</p>
          </div>
          <div>
            <p className="text-md">O = {stats.O}</p>
          </div>
          <div>
            <p className="text-md">Draw = {stats.D}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
