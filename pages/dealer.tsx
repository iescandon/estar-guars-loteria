import Carta from "@/components/carta";
import { useState, useEffect } from "react";
import Nav from "@/components/nav";

export default function Dealer() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [hasEnded, setHasEnded] = useState<boolean>(false);
  const [cardNum, setCardNum] = useState<number | undefined>(undefined);
  const [shuffledCardsArray, setShuffledCardsArray] = useState<Array<number>>(
    []
  );
  const [discardedCardsArray, setDiscardedCardsArray] = useState<Array<number>>(
    []
  );

  useEffect(() => {
    createAndShuffleDeck();
  }, []);

  const createAndShuffleDeck = () => {
    let tempDeck: Array<number> = [];
    for (let i = 1; i < 55; i++) {
      tempDeck.push(i);
    }
    for (let i = tempDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = tempDeck[i];
      tempDeck[i] = tempDeck[j];
      tempDeck[j] = temp;
    }
    setShuffledCardsArray(tempDeck);
  };

  const getNewCard = () => {
    //remove first card and put the rest back into remaining shuffled cards
    const tempArray: Array<number> = [...shuffledCardsArray];
    const oldCard = tempArray.splice(0, 1);
    setShuffledCardsArray(tempArray);

    // move old card to discarded pile
    const discardedTempArray: Array<number> = [
      ...discardedCardsArray,
      oldCard[0],
    ];
    setDiscardedCardsArray(discardedTempArray);

    //check if there are any cards left, end game
    if (tempArray.length === 0) {
      setHasEnded(true);
    }

    // set newcard num
    const nextNum = tempArray[0];
    setCardNum(nextNum);
  };

  return (
    <>
      {!hasStarted ? (
        <>
          <section className="h-screen p-4">
            <div className="flex flex-row h-[60%] lg:h-full w-full items-center justify-center">
              <button
                className="text-white w-1/2 md:w-1/2 max-w-[300px]"
                onClick={() => {
                  const firstNum = shuffledCardsArray[0];
                  setCardNum(firstNum);
                  setHasStarted(true);
                }}
              >
                <img
                  className="animate-pulse"
                  src="/images/start-game.png"
                  alt="start game"
                />
              </button>
            </div>
            <img
              className="absolute bottom-0 right-0"
              src="/images/baby-yoda.png"
              alt="baby yoda pressing button"
            />
          </section>
        </>
      ) : (
        <section className="md:min-h-screen p-4 md:pt-8 md:pb-12 md:px-10 relative">
          <Nav />
          {!hasEnded ? (
            <>
              <div className="flex flex-row justify-center pt-8">
                <div className="h-[300px] w-[200px] border border-[12px] border-white bg-white shadow-2xl">
                  <Carta cardNum={cardNum} clickable={false} />
                </div>
              </div>
              <div className="flex flex-row justify-center items-center pt-3 pb-8">
                <button
                  id="nextBtn"
                  className="bg-starWarsYellow text-black text-3xl w-[50px] h-[40px] rounded-full"
                  onClick={() => {
                    getNewCard();
                  }}
                >
                  <p className="font-[900]">&#8594;</p>
                </button>
              </div>
            </>
          ) : (
            <div className="py-4"></div>
          )}
          <div className="flex flex-row flex-wrap justify-center">
            <>
              {discardedCardsArray?.map((num, i) => (
                <div
                  key={`div-${i}`}
                  className="border border-8 border-white bg-white mx-1 mb-2 shadow-2xl"
                >
                  <Carta key={i} cardNum={num} clickable={false} />
                </div>
              ))}
            </>
          </div>
        </section>
      )}
    </>
  );
}
