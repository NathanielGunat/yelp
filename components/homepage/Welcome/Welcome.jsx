import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Partners } from "@components/ui/";
import checkmark from "@public/Assets/Checkmark.svg";

export default function Welcome() {
  const router = useRouter();

  function navigateToCampsPage(e) {
    e.preventDefault();
    router.push("/Camp");
  }

  return (
    <section
      id="text"
      className="  py-12 px-8 lg:px-24 lg:py-16 grid place-items-center"
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

        <Button onClick={navigateToCampsPage}>View camps</Button>

        <Partners />
      </div>
    </section>
  );
}
