import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/Martin_TV_Show_logo.png"
          alt="site logo"
          width={200}
          height={100}
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/programmers/">
        <a>Programmers</a>
      </Link>
    </nav>
  );
};

export default Navbar;
