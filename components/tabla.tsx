import { useState, useEffect } from "react";
import Carta from "./carta";

type TablaProps = {
  generateRandomNumber: Function;
};

export default function Tabla({ generateRandomNumber }: TablaProps) {
  const [randomNumberArray, setRandomNumberArray] =
    useState<Array<number> | null>(null);
  // const [loadedImages, setLoadedImages] = useState<Array<object>>([]);
  // const [ready, setReady] = useState<boolean>(false);

  // const handleImageLoaded = (num: number) => {
  //   const newLoadedImage = {
  //     [num]: true,
  //   };
  //   const updatedArray = [...loadedImages, newLoadedImage];
  //   setLoadedImages(updatedArray);
  //   if (loadedImages.length === randomNumberArray?.length) {
  //     console.log("All images loaded");
  //     setReady(true);
  //   }
  // };

  useEffect(() => {
    generateArray();
  }, []);

  // Promise.all(
  //   Array.from(document.images).map((img) => {
  //     if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
  //     return new Promise((resolve) => {
  //       img.addEventListener("load", () => resolve(true));
  //       img.addEventListener("error", () => resolve(false));
  //     });
  //   })
  // ).then((results) => {
  //   if (results.every((res) => res))
  //     console.log("all images loaded successfully");
  //   else console.log("some images failed to load, all finished loading");
  // });

  useEffect(() => {
    console.log("loading");
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
      {/* <div className={`flex flex-col ${ready ? "invisible" : "visible"}`}> */}
      {/* {!isLoading && (
        <> */}
      <img
        className="md:shadow-3xl"
        src="/images/title.png"
        alt="title"
        // onLoad={() => {
        //   handleImageLoaded(0);
        // }}
      />
      <div className="grid grid-cols-4 grid-rows-4 md:shadow-3xl border border-4 border-white bg-white">
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
                // handleImageLoaded={handleImageLoaded}
              />
            </div>
          ))}
        </>
      </div>
      {/* </>
      )} */}
    </div>
  );
}
