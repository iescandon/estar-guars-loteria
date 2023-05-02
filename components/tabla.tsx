import Carta from "./carta";

type TablaProps = {
  isLoading: boolean;
  randomNumberArray: Array<number> | undefined;
};

export default function Tabla({ isLoading, randomNumberArray }: TablaProps) {
  return (
    <>
      <div
        className={`flex flex-col ${
          isLoading ? "invisible h-0 w-0 overflow-hidden" : "visible"
        }`}
      >
        <img
          className="md:shadow-3xl"
          src="/images/title.png"
          alt="header of bingo card"
        />
        <div className="grid grid-cols-4 grid-rows-4 md:shadow-3xl border border-4 border-white bg-white">
          <>
            {randomNumberArray?.map((num, i) => (
              <div
                key={`div-${i}`}
                className="border border-4 border-white relative hover:cursor-pointer"
              >
                <Carta key={i} cardNum={num} clickable={true} />
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
}
