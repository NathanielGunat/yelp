import { useRouter } from "next/router";
import { CAMPS } from "../../DATA/DATA";
import Image from "next/image";
import { Text } from "@components/ui";
import mapPlaceHolder from "@public/Map.png";
export default function Slug() {
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
