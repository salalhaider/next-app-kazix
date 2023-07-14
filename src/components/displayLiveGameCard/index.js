import LiveGameCard from "@/components/liveGameCard";

export default function ({
  data,
  handleBoxClick,
  selectedBoxes,
  totalMultiplier,
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-6/6 p-2">
        {data.map(({ id, values }) => (
          <LiveGameCard
            values={values}
            id={id}
            handleBoxClick={handleBoxClick}
            selectedBoxes={selectedBoxes}
          />
        ))}
      </div>
    </>
  );
}
