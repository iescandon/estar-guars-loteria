import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-44 w-full flex flex-row justify-center px-8 md:px-10">
      <Link className="h-full" href="/">
        <img
          className="h-full drop-shadow-xl"
          src="/images/nav-logo.png"
          alt="star wars loteria logo"
        />
      </Link>
    </nav>
  );
}
