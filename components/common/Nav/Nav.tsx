import Image from "next/image";
import s from "./nav.module.css";
import logo from "@public/Assets/Logo.svg";
import { NavItems } from "@components/common";

export default function Nav({ pathname, variant }) {
  const isHome = pathname === "/";

  return (
    <>
      <nav className={s.root}>
        <Image src={logo} alt="yelp camp logo" />
        {!isHome && <NavItems />}
      </nav>
    </>
  );
}
