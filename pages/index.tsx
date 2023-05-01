import Nav from "@/components/nav";
import Link from "next/link";

export default function Home() {
  return (
    <section className="md:min-h-screen flex flex-col items-center px-8 py-4 md:pt-8 md:pb-12 md:px-10">
      <Nav reason="how to play" path="how-to-play" />
      <div className="flex flex-col md:flex-row h-full w-full max-w-[800px] justify-center items-center mt-8 py-8 bg-white rounded-md">
        <div className="flex flex-col items-center justify-center md:w-1/2 pb-6 md:pb-0">
          <Link className="" href="/dealer">
            <img
              className="h-[200px] md:h-[400px]"
              src="/images/dealer.png"
              alt="star wars splash image"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <Link className="" href="/player">
            <img
              className="h-[200px] md:h-[400px]"
              src="/images/player.png"
              alt="star wars splash image"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
