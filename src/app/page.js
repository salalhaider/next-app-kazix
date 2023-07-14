"use client";
import React, { useState } from "react";
import CardDisplay from "../components/displayCards";

import DisplayLiveGameCard from "@/components/displayLiveGameCard";

const boxes = [
  { id: "div1", values: [2, 3, 5] },
  { id: "div2", values: [2, 3, 5] },
  { id: "div3", values: [2, 3, 5] },
  { id: "div4", values: [2, 3, 5] },
  { id: "div5", values: [2, 3, 5] },
  { id: "div6", values: [2, 3, 5] },
  { id: "div7", values: [2, 3, 5] },
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

  return (
    <div className="bg-[#0C1F45]">
      <DisplayLiveGameCard
        data={boxes1}
        handleBoxClick={handleBoxClick}
        selectedBoxes={selectedBoxes}
        totalMultiplier={totalMultiplier1}
      />

      <CardDisplay
        data={boxes}
        handleBoxClick={handleBoxClick}
        selectedBoxes={selectedBoxes}
        totalMultiplier={totalMultiplier}
        initialAmount={initialAmount}
        setInitialAmount={setInitialAmount}
      />
    </div>
  );
}
