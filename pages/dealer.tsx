import Link from "next/link";
import Carta from "@/components/carta";
import { useState, useEffect } from "react";

export default function Dealer() {
  const [cardNum, setCardNum] = useState<number | undefined>(undefined);
  const [discardedCardsArray, setDiscardedCardsArray] = useState<Array<number>>(
    []
  );

  useEffect(() => {
    getCard();
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
    <section className="min-h-screen">
      {/* <div>Corre y se va corriendo con...</div> */}
      <div className="flex flex-row">
        <Link className="" href="/">
          finish
        </Link>
        <button
          className="pl-8"
          onClick={() => {
            getCard();
          }}
        >
          next card
        </button>
      </div>
      <div className="flex flex-row justify-center py-8">
        <div className="h-[300px] w-[203.58px] border border-[12px] border-white">
          <Carta cardNum={cardNum} />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center space-x-2">
        <>
          {discardedCardsArray?.map((num, i) => (
            <div key={`div-${i}`} className="border border-8 border-white mb-2">
              <Carta key={i} cardNum={num} />
            </div>
          ))}
        </>
      </div>
    </section>
  );
}
