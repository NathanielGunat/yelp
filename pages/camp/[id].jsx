import Image from "next/image";
import { useRouter } from "next/router";
import mapPlaceHolder from "@public/Map.png";
import { getAllCamps, getCampPaths } from "@local/operator";
import { CampItem } from "@components/common";
export async function getStaticProps() {
  const { CAMPS } = getAllCamps();
  return {
    props: {
      CAMPS,
    },
  };
}

export async function getStaticPaths() {
  const paths = getCampPaths();
  return {
    paths,
    fallback: false,
  };
}

export default function Slug({ CAMPS }) {
  const route = useRouter();
  const { id } = route.query;
  const camp = CAMPS.find((camp) => camp.id === id);

  return (
    <div className="wrapper shadow-md space-y-5 lg:flex lg:flex-row-reverse lg:items-start lg:justify-center lg:gap-16">
      <section className="lg:w-3/4 ml-auto">
        <CampItem variant="th" camp={camp} />
      </section>

      <section>
        <Image src={mapPlaceHolder} alt="" />
      </section>
    </div>
  );
}
