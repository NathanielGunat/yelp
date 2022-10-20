import { useRouter } from "next/router";
import { CAMPS } from "../../DATA/DATA";
import { Camp } from "../../components/ui";

export default function Slug() {
  const route = useRouter();
  const { id } = route.query;
  const Camp = CAMPS.find((camp) => camp.id === id);

  return;
}
