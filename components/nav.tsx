import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-44">
      <Link
        className="h-full flex flex-row justify-center items-center"
        href="/"
      >
        <img
          className="h-full pb-4 drop-shadow-xl"
          src="/images/estar-guars.png"
          alt="star wars splash image"
        />
      </Link>
    </nav>
  );
}
