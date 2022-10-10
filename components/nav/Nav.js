import Image from "next/image";
import logo from "../../public/Assets/Logo.svg";
export default function Nav() {
  return (
    <nav className="p-4 lg:col-start-1 lg:col-end-2 lg:px-24">
      <Image src={logo} alt="yelp camp logo" />
    </nav>
  );
}
