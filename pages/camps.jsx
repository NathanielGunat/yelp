import Image from "next/image";
import { getAllCamps } from "@local/operator";
import { Text } from "@components/ui";
import { Camp } from "../components/ui";
import Button from "@components/ui/Button";
import seach_logo from "@public/Assets/Search_Icon.svg";

export async function getStaticProps() {
  const { CAMPS } = getAllCamps();
  return {
    props: {
      CAMPS,
    },
  };
}

export default function Camps({ CAMPS }) {
  return (
    <div className="py-4 px-8 lg:px-24 space-y-8">
      <section className="bg-accent min-w-full p-8 rounded-md space-y-5">
        <Text>Welcome to YelpCamp!</Text>
        <p>
          View our hand-picked campgrounds from all over the world, or add your
          own.
        </p>
        <form action="" className="flex gap-4">
          <label
            htmlFor="search-camps"
            className=" bg-white flex gap-2 items-center px-4"
          >
            <Image src={seach_logo} alt={"seach"} />
            <input
              id="search-camps"
              type="text"
              placeholder="Search for camps"
              className="focus:outline-none"
            />
          </label>
          <Button>Search</Button>
        </form>
        or add your own camp
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CAMPS.map((camp) => (
          <Camp key={camp.id} camp={camp} />
        ))}
      </section>
    </div>
  );
}
