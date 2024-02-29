export interface Board {
  id: number;
  markedBy: string | null;
  marked: boolean;
}

export interface Player {
  X: string;
  O: string;
}

export interface BoardPropType {
  handleGameEnd: () => void;
  declaredWinner: (e: string | null) => void;
}

export type GameFinishedFuncParamType = string;
