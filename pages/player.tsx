import { useState, useEffect } from "react";
import Carta from "../components/carta";

export default function Player() {
  const [randomNumberArray, setRandomNumberArray] =
    useState<Array<number> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    generateTabla();
    setIsLoading(false);
  }, []);

  const generateRandomNumber = (num: number) =>
    Math.floor(Math.random() * num) + 1;

  const generateTabla = () => {
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
    <section className="flex flex-col items-center justify-center md:p-4 md:min-h-screen">
      {!isLoading && (
        <>
          <img className="md:shadow-3xl" src="/images/title.png" alt="title" />
          <div className="grid grid-cols-4 grid-rows-4 border border-4 border-white md:shadow-3xl">
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
    </section>
  );
}
