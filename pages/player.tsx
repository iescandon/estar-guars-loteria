import { useState, useEffect } from "react";
import Tabla from "@/components/tabla";

export default function Player() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [randomNumberArray, setRandomNumberArray] = useState<
    Array<number> | undefined
  >(undefined);

  const generateRandomNumber = (num: number) =>
    Math.floor(Math.random() * num) + 1;

  useEffect(() => {
    generateArray();
  }, []);

  useEffect(() => {
    if (randomNumberArray !== undefined) {
      checkLoadedImages();
    }
  }, [randomNumberArray]);

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

  const checkLoadedImages = () => {
    Promise.all(
      Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
        return new Promise((resolve) => {
          img.addEventListener("load", () => resolve(true));
          img.addEventListener("error", () => resolve(false));
        });
      })
    ).then((results) => {
      if (results.every((res) => res)) {
        console.log("all images loaded successfully");
        setIsLoading(false);
      } else console.log("some images failed to load, all finished loading");
    });
  };

  return (
    <>
      <section className="flex flex-row md:items-center justify-center md:p-4 md:min-h-screen bg-white">
        <div className={`h-full ${isLoading ? "visible" : "invisible"}`}></div>
        <Tabla isLoading={isLoading} randomNumberArray={randomNumberArray} />
      </section>
    </>
  );
}
