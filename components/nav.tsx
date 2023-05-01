import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-44 w-full flex flex-row justify-center">
      <Link className="h-full" href="/">
        <img
          className="h-full drop-shadow-xl"
          src="/images/nav-logo.png"
          alt="star wars splash image"
        />
      </Link>
      {/* {reason === "end game" ? (
        <Link className="absolute top-6 right-6" href="/">
          END GAME
        </Link>
      ) : (
        <Link className="absolute top-6 right-6" href={`/${path}`}>
          HOW TO PLAY
        </Link>
      )} */}
    </nav>
  );
}
