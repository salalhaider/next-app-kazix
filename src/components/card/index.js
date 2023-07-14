import React from "react";

import TeamsIcon from "../../assets/svg/team1.svg";
import Teams2Icon from "../../assets/svg/team2.svg";
import FlowIcon from "../../assets/svg/sports-icon-5.svg";
import SportsIcon from "../../assets/svg/sports.svg";
import ChartIcon from "../../assets/svg/chart-simple 1.svg";
import PIcon from "../../assets/svg/p_icon.svg";

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
    <div className="max-w-sm p-2 bg-white rounded-xl shadow dark:bg-[#0F2757] ">
      <div className="flex justify-between items-end mb-2">
        <div className="flex flex-row">
          <SportsIcon />

          <p className="text-xs font-bold ml-2">
            Argentina - Liga Professional
          </p>
        </div>
        <ChartIcon />
      </div>

      <div className="flex flex-row  items-center mb-2">
        <p className="text-xs text-[#7E8DA9]">Today, 21:30</p>

        <PIcon className="ml-2" />
        <FlowIcon className="ml-2" />
      </div>

      <div className="flex flex-row items-center mb-2">
        <TeamsIcon />

        {/* <p className="text-xs ml-2">Barracas central</p> */}
      </div>

      <div className="flex flex-row items-center mb-2">
        <Teams2Icon />
        {/* <p className="text-xs ml-2 text-red-400">CA central</p> */}
      </div>

      <p className="text-xs">1X2</p>

      <div className="flex justify-between mt-2">
        <div
          className={
            "flex px-3 py-2 w-24 h-8 bg-[#0A1B3D] rounded-full justify-between cursor-pointer " +
            (selected && box1 && " bg-[#FBFF20] text-black")
          }
          onClick={() => handleBoxClick(id, values[0])}
        >
          <p className="text-xs">1</p>
          <p className="text-xs">{values[0]}</p>
        </div>
        <div
          className={
            "flex px-3 py-2 w-24 h-8 bg-[#0A1B3D] rounded-full justify-between cursor-pointer " +
            (selected && box2 && " bg-[#FBFF20] text-black")
          }
          onClick={() => handleBoxClick(id, values[1])}
        >
          <p className="text-xs">Draw</p>
          <p className="text-xs">{values[1]}</p>
        </div>
        <div
          className={
            "flex px-3 py-2 w-24 h-8 bg-[#0A1B3D] rounded-full justify-between cursor-pointer " +
            (selected && box3 && " bg-[#FBFF20] text-black")
          }
          onClick={() => handleBoxClick(id, values[2])}
        >
          <p className="text-xs">2</p>
          <p className="text-xs">{values[2]}</p>
        </div>
        <div className="w-6 h-8 ml-1 bg-[#0A1B3D] rounded-xl flex justify-center items-center">
          <svg
            className="w-2 h-2 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
