import { useState, useEffect } from "react";
import Tabla from "@/components/tabla";
import { generateRandomNumber } from "../utils/index";

export default function Player() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [randomNumberArray, setRandomNumberArray] = useState<
    Array<number> | undefined
  >(undefined);

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
      <div
        className={`w-full flex flex-row justify-center items-center bg-white ${
          isLoading ? "h-screen" : "h-0"
        }`}
      >
        <img
          className="h-8 w-8 animate-ping"
          src="/images/cog.png"
          alt="cog loading icon"
        />
      </div>
      <section
        className={`flex flex-row md:items-center justify-center md:p-4 md:min-h-screen bg-white relative ${
          isLoading && "h-screen"
        }`}
      >
        <Tabla isLoading={isLoading} randomNumberArray={randomNumberArray} />
      </section>
    </>
  );
}
