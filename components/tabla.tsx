import Carta from "./carta";

type TablaProps = {
  isLoading: boolean;
  randomNumberArray: Array<number> | undefined;
};

export default function Tabla({ isLoading, randomNumberArray }: TablaProps) {
  return (
    <>
      <div className="flex flex-col">
        <img
          className={`md:shadow-3xl ${
            isLoading ? "invisible h-0 overflow-hidden" : "visible"
          }`}
          src="/images/title.png"
          alt="header of bingo card"
        />
        <div
          className={`w-[475px] h-[154px] bg-gray-200 ${
            isLoading ? "show" : "hidden"
          }`}
        ></div>
        <div
          className={`grid grid-cols-4 grid-rows-4 md:shadow-3xl border border-4 border-white bg-white ${
            isLoading ? "invisible h-0 overflow-hidden" : "visible"
          }`}
        >
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
        <div
          className={`grid grid-cols-4 grid-rows-4 md:shadow-3xl border border-4 border-white bg-white ${
            isLoading ? "show" : "hidden"
          }`}
        >
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (num, i) => (
                <div
                  key={`div-${i}`}
                  className="w-[118px] h-[179px] border border-4 border-white relative bg-gray-200"
                ></div>
              )
            )}
          </>
        </div>
      </div>
    </>
  );
}
