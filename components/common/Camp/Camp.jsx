import Image from "next/image";
import { useRouter } from "next/router";
import { Text, Button } from "@components/ui";

export default function Camp({ key, camp }) {
  const route = useRouter();

  function navigateToCamp(e) {
    e.preventDefault();
    route.push(`/camp/${camp.id}`);
  }

  return (
    <div className="shadow-md p-4 space-y-5">
      <div className="relative aspect-video">
        <Image src={camp.src} alt={camp.name} layout="fill" />
      </div>
      <Text variant={"sectionHeading"}>{camp.name}</Text>
      <p>{camp.discription}</p>
      <Button width={"100%"} variant={"white"} onClick={navigateToCamp}>
        View Campsground
      </Button>
    </div>
  );
}
