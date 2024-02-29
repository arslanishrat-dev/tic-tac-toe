import { TilePropsType } from "./types";

function Tile({ marked, markedBy, handleClick }: TilePropsType) {
  return (
    <>
      <div
        className="bg-white flex justify-center items-center"
        onClick={handleClick}
      >
        {marked && <span className="text-4xl">{markedBy}</span>}
      </div>
    </>
  );
}

export default Tile;
