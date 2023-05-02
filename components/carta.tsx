import { useState, useEffect } from "react";

type CartaProps = {
  cardNum: number | undefined;
};

export default function Carta({ cardNum }: CartaProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [beanNum, setBeanNum] = useState<number>(1);

  useEffect(() => {
    const num: number = generateRandomNumber(13);
    setBeanNum(num);
  }, []);

  const generateRandomNumber = (num: number) =>
    Math.floor(Math.random() * num) + 1;

  return (
    <>
      <img
        className="h-full w-full"
        key={`card-${cardNum}`}
        src={`/images/cards/${cardNum}.png`}
        alt="loteria card"
        onClick={() => {
          const click: boolean = !isSelected;
          setIsSelected(click);
        }}
      />
      <div className={`${isSelected ? "visible" : "invisible"}`}>
        <img
          className="absolute inset-1/2 -translate-y-1/2 -translate-x-1/2  z-10 h-16 w-16 drop-shadow-xl"
          key={`bean-${beanNum}`}
          src={`/images/beans/${beanNum}.png`}
          alt="bean"
          onClick={() => {
            const click: boolean = !isSelected;
            setIsSelected(click);
          }}
        />
        <button
          className="absolute inset-1/2 -translate-y-1/2 -translate-x-1/2  z-0 h-full w-full bg-black opacity-50"
          onClick={() => {
            const click: boolean = !isSelected;
            setIsSelected(click);
          }}
        ></button>
      </div>
    </>
  );
}
