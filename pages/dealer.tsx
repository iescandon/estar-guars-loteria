import Carta from "@/components/carta";
import { useState, useEffect } from "react";
import Nav from "@/components/nav";

export default function Dealer() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [cardNum, setCardNum] = useState<number | undefined>(undefined);
  const [discardedCardsArray, setDiscardedCardsArray] = useState<Array<number>>(
    []
  );

  // useEffect(() => {
  // setTimeout(() => {
  //   setIsLoading(false);
  // getCard();
  // }, 3000);
  // }, []);

  const generateRandomNumber = (num: number) =>
    Math.floor(Math.random() * num) + 1;

  const getCard = () => {
    if (cardNum) {
      const array: Array<number> = [...discardedCardsArray, cardNum];
      setDiscardedCardsArray(array);
    }
    if (discardedCardsArray.length === 55) {
      setDiscardedCardsArray([]);
    }
    let check = true;
    while (check === true) {
      const num: number = generateRandomNumber(54);
      if (!discardedCardsArray?.includes(num)) {
        setCardNum(num);
        check = false;
      }
    }
  };

  return (
    <>
      {!hasStarted ? (
        <>
          <section className="h-screen">
            <div className="flex flex-row h-2/3 lg:h-full w-full items-center justify-center">
              <button
                className="text-white w-2/3 md:w-1/2 max-w-[400px]"
                onClick={() => {
                  getCard();
                  setHasStarted(true);
                }}
              >
                <img
                  className="animate-pulse"
                  src="/images/start-game.png"
                  alt="star wars splash image"
                />
              </button>
            </div>
            <img
              className="absolute bottom-0 right-0"
              src="/images/baby-yoda.png"
              alt="star wars splash image"
            />
          </section>
        </>
      ) : (
        <section className="min-h-screen p-4 md:pt-8 md:pb-12 md:px-10 relative">
          <Nav reason={"end game"} />
          <div className="flex flex-row justify-center pt-8">
            <div className="h-[300px] w-[200px] border border-[12px] border-white shadow-2xl">
              <Carta cardNum={cardNum} />
            </div>
          </div>
          <div className="flex flex-row justify-center pb-8">
            <button
              className=""
              onClick={() => {
                getCard();
              }}
            >
              NEXT CARD
            </button>
          </div>
          <div className="flex flex-row flex-wrap justify-center space-x-2">
            <>
              {discardedCardsArray?.map((num, i) => (
                <div
                  key={`div-${i}`}
                  className="border border-8 border-white mb-2 shadow-2xl"
                >
                  <Carta key={i} cardNum={num} />
                </div>
              ))}
            </>
          </div>
        </section>
      )}
    </>
  );
}
