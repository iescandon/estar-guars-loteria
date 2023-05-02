import { useState, useEffect } from "react";
import Tabla from "@/components/tabla";

export default function Player() {
  const [randomNumberArray, setRandomNumberArray] =
    useState<Array<number> | null>(null);

  const generateRandomNumber = (num: number) =>
    Math.floor(Math.random() * num) + 1;

  useEffect(() => {
    generateArray();
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
    <>
      <section className="flex flex-row md:items-center justify-center md:p-4 md:min-h-screen bg-white">
        <Tabla randomNumberArray={randomNumberArray} />
      </section>
    </>
  );
}
