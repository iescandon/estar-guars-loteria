import { useState, useEffect } from "react";
import Carta from "./carta";

type TablaProps = {
  generateRandomNumber: Function;
};

export default function Tabla({ generateRandomNumber }: TablaProps) {
  const [randomNumberArray, setRandomNumberArray] =
    useState<Array<number> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    generateArray();
    setIsLoading(false);
  }, []);

  const generateArray = () => {
    let count: number = 0;
    let array: Array<number> = [];

    while (count < 16) {
      const num: number = generateRandomNumber(54);
      if (!array.includes(num)) {
        array.push(num);
        count++;
      }
    }
    setRandomNumberArray(array);
  };

  return (
    <div className="flex flex-col">
      {!isLoading && (
        <>
          <img className="" src="/images/title.png" alt="title" />
          <div className="grid grid-cols-4 grid-rows-4 md:shadow-md border border-4 border-white">
            <>
              {randomNumberArray?.map((num, i) => (
                <div
                  key={`div-${i}`}
                  className="border border-4 border-white relative hover:cursor-pointer"
                >
                  <Carta
                    key={i}
                    cardNum={num}
                    generateRandomNumber={generateRandomNumber}
                  />
                </div>
              ))}
            </>
          </div>
        </>
      )}
    </div>
  );
}
