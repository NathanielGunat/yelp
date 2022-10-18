import Link from "next/link";
import s from "./Button.module.css";

export default function Button() {
  return (
    <Link href={"/Camp"}>
      <button className={s.btn}>View Campgrounds</button>
    </Link>
  );
}
