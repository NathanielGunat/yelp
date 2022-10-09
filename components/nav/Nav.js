import Image from "next/image";
import logo from "../../public/Assets/Logo.svg";
export default function Nav() {
  return (
    <nav>
      <div className="p-4 ">
        <Image src={logo} alt="yelp camp logo" />
      </div>
    </nav>
  );
}
