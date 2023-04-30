import Link from "next/link";
import Carta from "@/components/carta";
import { useState, useEffect } from "react";
import Nav from "@/components/nav";

export default function Dealer() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cardNum, setCardNum] = useState<number | undefined>(undefined);
  const [discardedCardsArray, setDiscardedCardsArray] = useState<Array<number>>(
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      getCard();
    }, 3000);
  }, []);

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
    <section
      className={`min-h-screen ${
        isLoading && "flex flex-col justify-center"
      } pt-8 pb-12 px-10`}
    >
      {isLoading ? (
        <div className="font-bayon text-[100px] flex flex-row justify-center items-center">
          Corre y se va <br></br> corriendo con...
        </div>
      ) : (
        <>
          <Nav />
          <div className="flex flex-row justify-center">
            <div className="h-[300px] border border-[12px] border-white shadow-2xl">
              <Carta cardNum={cardNum} />
            </div>
          </div>
          <div className="flex flex-row justify-center pb-6">
            <Link className="" href="/">
              END GAME
            </Link>
            <button
              className="pl-8"
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
        </>
      )}
    </section>
  );
}
