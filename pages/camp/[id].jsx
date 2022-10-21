import { useRouter } from "next/router";
import { getAllCamps, getCampID } from "@local/operator";
import Image from "next/image";
import { Text } from "@components/ui";
import mapPlaceHolder from "@public/Map.png";

export async function getStaticProps() {
  const { CAMPS } = getAllCamps();
  return {
    props: {
      CAMPS,
    },
  };
}

export async function getStaticPaths() {
  const paths = getCampID();
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
    <div className="shadow-md p-4 space-y-5 lg:flex lg:flex-row-reverse">
      <section>
        <div className="relative aspect-video">
          <Image src={camp.src} alt={camp.name} layout="fill" />
        </div>
        <Text variant={"sectionHeading"}>{camp.name}</Text>
        <p>{camp.discription}</p>
      </section>
      <section>
        <Image src={mapPlaceHolder} alt="" />
      </section>
    </div>
  );
}
