import Tabla from "@/components/tabla";

export default function Player() {
  const generateRandomNumber = (num: number) =>
    Math.floor(Math.random() * num) + 1;

  return (
    <>
      <section className="flex flex-row md:items-center justify-center md:p-4 md:min-h-screen bg-white md:bg-gray-300">
        <Tabla generateRandomNumber={generateRandomNumber} />
      </section>
    </>
  );
}
