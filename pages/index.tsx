import Link from "next/link";

// TODO: change favicon

export default function Home() {
  return (
    <div className="min-h-screen">
      <div>
        add instructions on start screen, disappear when game starts qr code to
        get to player screen
      </div>
      <Link className="" href="/dealer">
        start
      </Link>
      <Link className="pl-8" href="/player">
        player
      </Link>
    </div>
  );
}

// import Link from "next/link";

// export default function Home() {
//   return (
// <div className="min-h-screen bg-[url(/images/hyperspace.jpg)] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
// {/* <img src="/images/splash-crop.png" alt="star wars splash image" /> */}
// <div className="flex flex-row space-x-8 mt-8">
//   <Link
//     className="bg-white py-2 px-4 hover:animate-pulse rounded-md text-xl"
//     href="/dealer"
//   >
//     Dealer
//   </Link>
//   <Link
//     className="bg-white py-2 px-4 hover:animate-pulse rounded-md text-xl"
//     href="/player"
//   >
//     Player
//   </Link>
// </div>
// </div>
//   );
// }
