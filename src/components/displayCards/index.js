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

        <div
          className={`${
            isOpen ? "translate-x-[-10] ease-out" : "translate-x-full ease-in"
          }  rounded-md w-60 ml-2 h-full left-1 top-0 overflow-auto transition-transform duration-200 transform dark:bg-[#0F2757] z-30`}
        >
          <div className="p-4 relative">
            <button
              onClick={toggle}
              className="p-2 mb-5 bg-red-500 text-white rounded "
            >
              Close
            </button>
            <div className="flex  mb-8">
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
        </div>
      </div>
    </div>
  );
}
