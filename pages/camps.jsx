import Image from "next/image";
import { useState } from "react";
import { Text } from "@components/ui";
import Button from "@components/ui/Button";
import { getAllCamps } from "@local/operator";
import { CampItem } from "@components/common";
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
  const [campList, setCampList] = useState(search(""));
  const [inputValue, setInputValue] = useState("");

  function search(name) {
    return CAMPS.filter((camp) => camp.name.toLowerCase().includes(name));
  }

  function onSearchHandler(e) {
    const searchResults = search(e.target.value);
    setInputValue(e.target.value);
    setCampList(searchResults);
  }

  return (
    <div className="wrapper space-y-8">
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
              onChange={onSearchHandler}
              id="search-camps"
              type="search"
              placeholder="Search for camps"
              className="focus:outline-none"
              value={inputValue}
            />
          </label>
          <Button>Search</Button>
        </form>
        or add your own camp
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campList.map((camp) => (
          <div key={camp.id} className="shadow-md p-4 space-y-5">
            <CampItem variant="campItem" camp={camp} />
          </div>
        ))}
      </section>
    </div>
  );
}
