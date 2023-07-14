"use client";
import React, { useEffect, useState } from "react";
import CardDisplay from "../components/displayCards";
import DisplayLiveGameCard from "@/components/displayLiveGameCard";

const boxes = [
  { id: "div1", values: [2, 3, 5] },
  { id: "div2", values: [2, 3, 5] },
  { id: "div3", values: [2, 3, 5] },
  { id: "div4", values: [2, 3, 5] },
  { id: "div5", values: [2, 3, 5] },
  { id: "div6", values: [2, 3, 5] },
];

const boxes2 = [
  { id: "div21", values: [2, 3, 5] },
  { id: "div22", values: [2, 3, 5] },
  { id: "div23", values: [2, 3, 5] },
  { id: "div24", values: [2, 3, 5] },
  { id: "div25", values: [2, 3, 5] },
  { id: "div26", values: [2, 3, 5] },
];

const boxes3 = [
  { id: "div31", values: [2, 3, 5] },
  { id: "div32", values: [2, 3, 5] },
  { id: "div33", values: [2, 3, 5] },
  { id: "div34", values: [2, 3, 5] },
  { id: "div35", values: [2, 3, 5] },
  { id: "div36", values: [2, 3, 5] },
];

const boxes1 = [
  { id: "liv1", values: [3, 4, 5] },
  { id: "liv2", values: [3, 4, 5] },
];

export default function Home() {
  const [selectedBoxes, setSelectedBoxes] = useState({});
  const [initialAmount, setInitialAmount] = useState(10); // Default initial amount set to 10

  const handleBoxClick = (divId, boxValue) => {
    let newSelectedBoxes;

    console.log(divId);

    // If box is already selected, deselect it, otherwise select it
    if (selectedBoxes[divId] === boxValue) {
      newSelectedBoxes = { ...selectedBoxes };
      delete newSelectedBoxes[divId];
    } else {
      newSelectedBoxes = {
        ...selectedBoxes,
        [divId]: boxValue,
      };
    }

    setSelectedBoxes(newSelectedBoxes);
  };

  // Calculate the total multiplier
  const totalMultiplier = Object.values(selectedBoxes).reduce(
    (acc, cur) => acc * cur,
    initialAmount
  );

  const [selectedBoxes1, setSelectedBoxes1] = useState({});
  const [initialAmount1, setInitialAmount1] = useState(10); // Default initial amount set to 10

  const handleBoxClick1 = (divId, boxValue) => {
    let newSelectedBoxes1;

    // If box is already selected, deselect it, otherwise select it
    if (selectedBoxes1[divId] === boxValue) {
      newSelectedBoxes1 = { ...selectedBoxes1 };
      delete newSelectedBoxes1[divId];
    } else {
      newSelectedBoxes1 = {
        ...selectedBoxes1,
        [divId]: boxValue,
      };
    }

    setSelectedBoxes1(newSelectedBoxes1);
  };

  // Calculate the total multiplier
  const totalMultiplier1 = Object.values(selectedBoxes1).reduce(
    (acc, cur) => acc * cur,
    initialAmount1
  );
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(selectedBoxes);
    if (selectedBoxes != {} && !isOpen) {
      toggle();
    }
  }, [selectedBoxes]);

  return (
    <div className="bg-[#0C1F45]">
      <div className="">
        <DisplayLiveGameCard
          data={boxes1}
          handleBoxClick={handleBoxClick}
          selectedBoxes={selectedBoxes}
          totalMultiplier={totalMultiplier1}
        />
      </div>
      <div className="flex">
        <div
          // className={`${
          //   isOpen ? "translate-x-[-10] ease-out" : "translate-x-full ease-in"
          //   }  rounded-md w-60 ml-2 h-full left-1 top-0 overflow-auto transition-transform duration-200 transform dark:bg-[#0F2757] z-30`}
          className={`${
            isOpen ? "translate-x-[-10] ease-out" : "translate-x-full ease-in"
          }  rounded-md fixed top-0 right-0 h-screen w-64 transition-transform duration-200 transform dark:bg-[#0F2757] z-30`}
        >
          <div className="p-4 relative">
            <div>
              <button
                onClick={toggle}
                className="p-2 mb-5 bg-red-500 text-white rounded "
              >
                Close
              </button>
            </div>

            <div className="flex mb-8 ml-4 overflow-scroll">
              <div className=" bg-transparent ">
                {/* <h2 className="font-bold mb-2">Selected Boxes</h2> */}
                {Object.entries(selectedBoxes).map(([divId, value], index) => (
                  <div key={index} className="mb-2 flex">
                    <a
                      href="#"
                      class="block max-w-sm p-2 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                        {" "}
                        Barracas - CA
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                        {" "}
                        Multiplier: x{value}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex justify-between items-center col-2 bg-gray-900">
            <div className="flex justify-between m-2">
              <input
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(Number(e.target.value))}
                className="ml-2 border-2 text-black w-20 h-10 bg-gray-200 rounded-sm"
              />
            </div>
            <div className="flex justify-between m-2">
              <p class="font-normal text-gray-700 dark:text-gray-400 ">
                Payout
              </p>
              <h2 className="font-bold ml-auto mr-6 mt-4 justify-center ">
                {""}
                {totalMultiplier} $
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <CardDisplay
            data={boxes}
            handleBoxClick={handleBoxClick}
            selectedBoxes={selectedBoxes}
            totalMultiplier={totalMultiplier}
            initialAmount={initialAmount}
            setInitialAmount={setInitialAmount}
          />
          <CardDisplay
            data={boxes2}
            handleBoxClick={handleBoxClick}
            selectedBoxes={selectedBoxes}
            totalMultiplier={totalMultiplier}
            initialAmount={initialAmount}
            setInitialAmount={setInitialAmount}
          />
          <CardDisplay
            data={boxes3}
            handleBoxClick={handleBoxClick}
            selectedBoxes={selectedBoxes}
            totalMultiplier={totalMultiplier}
            initialAmount={initialAmount}
            setInitialAmount={setInitialAmount}
          />
        </div>
      </div>
    </div>
  );
}
