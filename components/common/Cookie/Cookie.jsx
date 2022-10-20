import clsx from "clsx";
import s from "./cookie.module.css";

export default function Cookie(props) {
  const { title, action, hide } = props;

  const rootClassName = clsx(s.root, {
    ["translate-y-full"]: hide === "true",
    ["translate-y-0"]: hide === "false",
  });

  console.log(hide);
  return (
    <div className={rootClassName}>
      <p className="text-white">{title}</p> {action && action}
    </div>
  );
}
