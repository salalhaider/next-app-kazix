import SportsIcon from "../../assets/svg/sports.svg";
import BackGround from "../../assets/image/background.png";

export default function ({ values, id, handleBoxClick, selectedBoxes }) {
  let selected = false;
  let box1 = false;
  let box2 = false;
  let box3 = false;

  {
    Object.entries(selectedBoxes).map(([divId, value], index) => {
      if (divId == id) {
        selected = true;
        if (value == values[0]) box1 = true;
        if (value == values[1]) box2 = true;
        if (value == values[2]) box3 = true;
      }
    });
  }

  return (
    <div
      className="b h-full rounded-lg  bg-center "
      style={{ backgroundImage: `url(${BackGround.src})` }}
    >
      <div className="relative inset-0 bg-opacity-100 backdrop-filter backdrop-blur-sm p-4">
        <div className="mb-4 flex items-center">
          <SportsIcon />
          <span className="text-sm font-bold text-white ml-2">
            England &gt; Premier League
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 flex items-center">
            <span className="text-lg font-bold text-white">Tottenham</span>
            <span className="mx-2 text-white">-</span>
            <span className="text-lg font-bold text-white">Leicester City</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-black bg-opacity-60">
              <span className="font-bold text-white">4</span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black bg-opacity-60">
              <span className="font-bold text-white">2</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div
            className={
              "flex w-1/4 justify-between bg-[#0A1B3D] rounded-lg bg-opacity-50 p-2 transition-transform duration-300 hover:scale-105 hover:bg-opacity-75 " +
              (selected && box1 && " bg-[#FBFF20] text-white")
            }
            onClick={() => handleBoxClick(id, values[0])}
          >
            <span className="mr-2 font-bold text-white">1</span>
            <span className="text-white">{values[0]}</span>
          </div>
          <div
            className={
              "flex w-1/3 justify-between rounded-lg bg-[#0A1B3D] bg-opacity-50 p-2 transition-transform duration-300 hover:scale-105 hover:bg-opacity-75 " +
              (selected && box2 && " bg-[#FBFF20] text-black")
            }
            onClick={() => handleBoxClick(id, values[1])}
          >
            <span className="mr-2 font-bold text-white">Draw</span>
            <span className="text-white">{values[1]}</span>
          </div>
          <div
            className={
              "flex w-1/3 justify-between rounded-lg bg-[#0A1B3D] bg-opacity-50 p-2 transition-transform duration-300 hover:scale-105 hover:bg-opacity-75 " +
              (selected && box3 && " bg-[#FBFF20] text-black")
            }
            onClick={() => handleBoxClick(id, values[2])}
          >
            <span className="mr-2 font-bold text-white">2</span>
            <span className="text-white">{values[2]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
