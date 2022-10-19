import Link from "next/link";
import Image from "next/image";
import s from "./nav.module.css";
import logo from "@public/Assets/Logo.svg";

export default function Nav({ pathname }) {
  const isHome = pathname === "/" ? true : false;

  console.log(pathname);
  return (
    <>
      <nav className={s.root}>
        <Image src={logo} alt="yelp camp logo" />
        {isHome || (
          <div>
            <Link href="/"> home</Link>
            <div className="space-x-4">
              <Link href={"/user"}>johndoe</Link>
              <Link href={"/signin"}>signin</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
