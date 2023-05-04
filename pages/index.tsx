import { useState } from "react";
import Nav from "@/components/nav";
import Link from "next/link";

export default function Home() {
  const [viewHowTo, setViewHowTo] = useState<boolean>(false);
  return (
    <div className="relative">
      {/* px-8 py-4 md:pt-8 md:pb-12 md:px-10 */}
      <section className="min-h-screen flex flex-col h-full w-full items-center justify-between pt-4 md:pt-8">
        <Nav />
        <section className="flex flex-col md:flex-row h-full justify-between items-center my-6 py-6 px-8 md:px-10 bg-white rounded-md">
          <div className="pb-6 md:pb-0">
            <Link className="" href="/dealer">
              <img
                className="h-[250px] md:h-[400px]"
                src="/images/dealer.png"
                alt="darth vader holding loteria card like a card dealer"
              />
            </Link>
          </div>
          <div className="md:pl-20">
            <Link className="" href="/player">
              <img
                className="h-[250px] md:h-[400px]"
                src="/images/player.png"
                alt="star wars loteria card"
              />
            </Link>
          </div>
        </section>
        <button
          className="w-full flex justify-center items-center h-[50px] bg-white opacity-10"
          onClick={() => {
            const click: boolean = !viewHowTo;
            setViewHowTo(click);
          }}
        >
          <img
            className="h-[14px] md:h-[16px]"
            src={`/images/how-to-play.png`}
            alt="how to play"
          />
        </button>
        <div
          className={`w-full h-full absolute bottom-0 right-0 bg-black opacity-80 z-0 ${
            viewHowTo ? "show" : "hidden"
          }`}
        ></div>
        <div
          className={`w-full justify-center items-center absolute bottom-0 right-0 bg-white space-y-4 px-8 md:px-16 ease-out duration-200 rounded-top-corners z-10 ${
            viewHowTo
              ? "max-h-full overflow-scroll py-4"
              : "max-h-0 overflow-hidden"
          }`}
        >
          <img
            className="h-[24px] md:h-[30px]"
            src={`/images/how-to-play.png`}
            alt="how to play"
          />
          <ol className="space-y-2 list-decimal">
            <li>
              Assign one person to be the dealer. Everyone else will be a
              player.
            </li>
            <li>
              Players will click on PLAYER and wait for the dealer to start
              calling the cards.
            </li>
            <li>
              The dealer will click on DEALER and wait for all of the players to
              get their cards. Once the players are all ready, the dealer will
              click START GAME. The dealer will call out the cards one at a
              time.
            </li>
            <li>
              If a player has a card called out by the dealer, they will click
              on the individual card to place a bean on it. If you accidentally
              put a bean on a card by accident, click on it again to remove the
              bean.
            </li>
            <li>
              The dealer will continue to call out cards until there is a
              winner!
            </li>
            <li>
              A player can win by having 4 in a row (diagonically, vertically,
              or horizontally), by having the 4 corners, or by filling in the
              inner 4 squares. If a player has won, they must yell out ¡Buenas!
              before the next card has been called.
            </li>
            <li>
              After the dealer verifies that the player has officially won, they
              will end the game. The game can be played as many times as you
              like! The dealer can continue to be the dealer or they can choose
              someone else to be the dealer.
            </li>
            <li>
              Players can continue to use the same card for future games, all
              they need to do is click on all their beans to clear their table.
              If a player would like a different card, click refresh to get a
              brand new card.
            </li>
          </ol>
          <button
            className="w-full flex justify-center items-center h-[20px]"
            onClick={() => {
              const click: boolean = !viewHowTo;
              setViewHowTo(click);
            }}
          >
            <img
              className="h-[14px] md:h-[16px]"
              src={`/images/lets-play.png`}
              alt="how to play"
            />
          </button>
        </div>
      </section>
    </div>
  );
}
