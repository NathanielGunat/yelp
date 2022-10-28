import Image from "next/image";
import { useRouter } from "next/router";
import { Text, Button } from "@components/ui";
import clsx from "clsx";
import s from "./campitem.module.css";

type ivariant = "campPage" | "campItem";

export default function Camp({ camp, variant = "campItem" }) {
  const route = useRouter();

  function navigateToCamp(e) {
    e.preventDefault();
    route.push(`/camp/${camp.id}`);
  }

  return (
    <>
      <div className="relative aspect-video">
        <Image src={camp.src} alt={camp.name} layout="fill" />
      </div>
      <Text variant={"sectionHeading"}>{camp.name}</Text>
      <p>{camp.discription}</p>

      {variant === "campItem" && (
        <Button width={"100%"} variant={"white"} onClick={navigateToCamp}>
          View Campsground
        </Button>
      )}
    </>
  );
}
