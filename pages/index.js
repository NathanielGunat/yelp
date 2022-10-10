import Nav from "../components/nav/Nav";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import airbnb from "../public/Assets/Airbnb.svg";
import booking from "../public/Assets/Booking.svg";
import plumGuide from "../public/Assets/PlumGuide.svg";
import checkmark from "../public/Assets/Checkmark.svg";

export default function Home() {
  return (
    <Layout>
      {/* nav */}
      <Nav />

      {/* image */}
      <section
        id="home-image"
        className="h-96 lg:col-start-2 lg:row-start-1 lg:row-end-4 relative lg:h-full"
      >
        <Image
          src={"/Hero_image.jpg"}
          layout="fill"
          objectFit="cover"
          alt="hero image"
        />
      </section>
      {/* text */}
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
          <button className="bg-black rounded-sm text-white py-4  px-8">
            View Campgrounds
          </button>
          <div>
            <p>Partnered with:</p>
            <div className="flex gap-3">
              <Image src={airbnb} alt="airbnb" />
              <Image src={booking} alt="booking" />
              <Image src={plumGuide} alt="plumGuide" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
