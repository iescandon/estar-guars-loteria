import { useState } from "react";

type CartaProps = {
  cardNum: number | undefined;
  generateRandomNumber?: Function;
};

export default function Carta({ cardNum, generateRandomNumber }: CartaProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [beanNum, setBeanNum] = useState<number>(1);

  return (
    <>
      <img
        className="h-full w-full"
        key={`card-${cardNum}`}
        src={`/images/cards/${cardNum}.png`}
        alt="loteria card"
        onClick={() => {
          if (generateRandomNumber) {
            const click: boolean = !isSelected;
            setIsSelected(click);
            const num: number = generateRandomNumber(13);
            setBeanNum(num);
          }
        }}
      />
      {generateRandomNumber && (
        <>
          <img
            className={`z-10 absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 h-16 w-16 drop-shadow-xl ${
              isSelected ? "show" : "hidden"
            }`}
            key={`bean-${beanNum}`}
            src={`/images/beans/${beanNum}.png`}
            alt="bean"
            onClick={() => {
              const click: boolean = !isSelected;
              setIsSelected(click);
            }}
          />
          <button
            className={`z-0 absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 h-full w-full bg-black opacity-50 ${
              isSelected ? "show" : "hidden"
            }`}
            onClick={() => {
              const click: boolean = !isSelected;
              setIsSelected(click);
            }}
          ></button>
        </>
      )}
    </>
  );
}
