import Nav_Home from "components/nav/Nav_Home";
import Image from "next/image";
import checkmark from "public/Assets/Checkmark.svg";
import HomeImage from "components/homeImage/HomeImage";
import Layout_Home from "components/layout/Layout_Home";
import Button from "components/button/Button";
import { Airbnb, Booking, PlumGuide } from "components/icons";

export default function Home() {
  return (
    <div
      id="Home-Container"
      className="w-screen h-screen lg:grid lg:grid-rows-[min-content,1fr,1fr] lg:grid-cols-2"
    >
      <Nav_Home />
      <HomeImage />
      <section
        id="text"
        className="py-12 row-start-2 row-span-full px-8 lg:px-24 lg:py-16 grid place-items-center"
      >
        <div id="for-centering " className=" space-y-6 ">
          <h1>Explore the best camps on Earth.</h1>
          <p>
            YelpCamp is a curated list ot the best camping on Earth. Unfiltered
            and unbiased reviews.
          </p>
          <ul className="space-y-2">
            <li className="flex flex-row items-center gap-2">
              <Image src={checkmark} alt="checkmark" /> Add your own camp
              suggestions.
            </li>
            <li className="flex flex-row items-center gap-2">
              <Image src={checkmark} alt="checkmark" />
              Leave reviews and experiences.
            </li>
            <li className="flex flex-row items-center gap-2">
              <Image src={checkmark} alt="checkmark" />
              See locations for all camps.
            </li>
          </ul>
          <Button />
          <div>
            <p>Partnered with:</p>
            <div className="flex gap-3">
              <Airbnb />
              <Booking />
              <PlumGuide />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout_Home page={"Home"}>{page}</Layout_Home>;
};
