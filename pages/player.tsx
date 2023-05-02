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
        className={`w-full flex flex-row justify-center items-center ${
          isLoading ? "mt-[250px] md:mt-0 md:h-screen" : "h-0 hidden"
        }`}
      >
        <span className="animate-ping">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="70px"
            height="70px"
            viewBox="0 0 634.142 634.143"
          >
            <path
              id="_x23_191919_00000116228996562377107210000014167277193379112066_"
              fill="#ffffff"
              d="M541.275,92.868  C481.388,32.981,401.764,0,317.072,0S152.755,32.981,92.869,92.868C32.981,152.755,0,232.379,0,317.072  c0,84.693,32.981,164.316,92.869,224.203c59.887,59.887,139.51,92.868,224.203,92.868s164.316-32.981,224.203-92.868  c59.887-59.887,92.868-139.51,92.868-224.203S601.161,152.755,541.275,92.868z M317.072,595.786  c-153.684,0-278.715-125.031-278.715-278.715c0-153.684,125.032-278.715,278.715-278.715s278.714,125.031,278.714,278.715  C595.786,470.755,470.755,595.786,317.072,595.786z"
            ></path>
            <path
              id="_x23_191919"
              fill="#ffffff"
              d="M562.879,361.752c-0.785,2.672-16.913,56.308-54.952,85.781  c-0.011,0.008-0.027-0.006-0.017-0.017c3.407-3.771,99.984-112.665,20.832-252.517c-0.453-0.8-0.89-1.562-0.106,0.048  c7.151,14.685,39.163,93.409-45.583,182.253c-0.01,0.01-0.028,0-0.021-0.011c3.711-5.218,115.379-165.392-67.379-295.588  c-0.082-0.058-0.087-0.05-0.007,0.013c27.22,21.515,87.88,85.921-11.791,209.069c53.561,95.981,30.657,199.393-74.796,251.132  l-2.362-92.952c-0.005-0.19,0.229-0.285,0.358-0.145l39.237,42.57c0.067,0.072,0.182-0.009,0.136-0.096l-28.436-54.071  c-0.067-0.127,0.013-0.282,0.156-0.301l72.871-9.547c0.097-0.013,0.097-0.154,0-0.167l-71.926-9.423  c-0.13-0.017-0.212-0.15-0.168-0.274l21.937-61.776c0.033-0.093-0.093-0.157-0.148-0.076l-34.72,50.561  c-0.113,0.165-0.371,0.088-0.376-0.112l-8.547-339.355l-8.547,339.355c-0.005,0.2-0.263,0.276-0.376,0.112l-34.72-50.561  c-0.056-0.081-0.181-0.017-0.149,0.076l21.937,61.776c0.044,0.124-0.037,0.257-0.168,0.274l-71.926,9.423  c-0.098,0.013-0.098,0.154,0,0.167l72.871,9.547c0.142,0.019,0.223,0.173,0.156,0.301l-28.436,54.071  c-0.046,0.087,0.07,0.168,0.136,0.096l39.237-42.57c0.129-0.14,0.363-0.045,0.358,0.145l-2.362,92.952  c-105.453-51.739-128.357-155.15-74.796-251.132c-99.671-123.149-39.011-187.554-11.791-209.069c0.08-0.063,0.075-0.072-0.007-0.013  c-182.758,130.195-71.09,290.37-67.379,295.588c0.008,0.011-0.011,0.021-0.02,0.011c-84.746-88.844-52.734-167.569-45.583-182.253  c0.784-1.609,0.346-0.847-0.106-0.048c-79.152,139.852,17.424,248.745,20.832,252.517c0.009,0.01-0.006,0.025-0.017,0.017  c-38.039-29.473-54.167-83.109-54.952-85.781c-0.004-0.012-0.021-0.012-0.02,0.001c0.537,5.23,22.503,204.822,245.827,204.822  s245.29-199.591,245.827-204.822C562.9,361.74,562.882,361.74,562.879,361.752z"
            ></path>
          </svg>
        </span>
      </div>
      <section
        className={`flex flex-row w-full md:items-center justify-center md:p-4 ${
          isLoading ? "h-0" : "md:min-h-screen"
        }`}
      >
        <Tabla isLoading={isLoading} randomNumberArray={randomNumberArray} />
      </section>
    </>
  );
}
