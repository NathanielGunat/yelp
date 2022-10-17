import Image from "next/image";
import Button from "@components/button/Button";
import Layout_Camps from "@components/layout/Layout_Camps";
import seach_logo from "@public/Assets/Search_Icon.svg";

export default function Camps() {
  return (
    <div className="py-4 px-8 lg:px-24 w-screen h-screen">
      <section className="bg-gray-200 min-w-full p-8 rounded-md">
        <h1>Welcome to YelpCamp!</h1>
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
          <Button />
        </form>
        or add your own camp
      </section>
    </div>
  );
}

Camps.getLayout = function getLayout(page) {
  return <Layout_Camps page={"Camps"}>{page}</Layout_Camps>;
};
