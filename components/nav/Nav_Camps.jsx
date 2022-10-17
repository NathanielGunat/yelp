import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Assets/Logo.svg";
import Hamburger from "../../public/Assets/Hamburger_Menu.svg";
export default function Nav_Camps() {
  return (
    <nav className="py-4 px-8 flex items-center justify-between md:grid md:grid-cols-[max-content,1fr] gap-8 lg:px-24">
      <Image src={logo} alt="yelp camp logo" />

      <div className="hidden md:flex items-center justify-between">
        <Link href={"/"}>Home</Link>
        <div className="flex items-center gap-4">
          <p>johndoe</p>
          <Link href={"/"}>Logout</Link>
        </div>
      </div>
      <div id="Hamburger" className="md:hidden">
        <Image src={Hamburger} alt="Hambuger Menu" />
      </div>
    </nav>
  );
}
