import { useEffect, useState } from "react";
import Card from "../card";

export default function ({
  data,
  handleBoxClick,
  selectedBoxes,
  totalMultiplier,
  initialAmount,
  setInitialAmount,
}) {
  return (
    <div>
      <div className="flex p-4 justify-between">
        <p>Top Soccer Games</p>
        <div className="flex items-center">
          <div className="w-20 h-8 bg-[#0F2757]  rounded-md flex justify-center items-center">
            <p className="text-md text-center"> View All</p>
          </div>
          <div className="w-8 h-6 ml-1 bg-[#0F2757] rounded-md flex justify-center items-center">
            <svg
              className="w-2 h-2 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </div>
          <div className="w-8 h-6 ml-1 bg-[#0F2757] rounded-md flex justify-center items-center">
            <svg
              className="w-2 h-2 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row py-1 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-5/6">
          {data.map(({ id, values }) => (
            <Card
              values={values}
              id={id}
              handleBoxClick={handleBoxClick}
              selectedBoxes={selectedBoxes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
