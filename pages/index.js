import Image from "next/image";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <header className="w-screen">
        <div className="md:hidden">
          <Image
            src="/Hero_Image.jpg"
            alt="hero image"
            width={661}
            height={900}
          />
        </div>
        <div className=" hidden md:block w-sreen h-[375px] bg-green-200 relative">
          <Image
            className="absolute"
            src="/Hero_Image (Tablet and Mobile).jpg"
            alt="hero image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </header>
    </Layout>
  );
}
