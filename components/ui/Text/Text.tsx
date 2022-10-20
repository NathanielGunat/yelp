import clsx from "clsx";
import React from "react";
import s from "./text.module.css";

interface TextProps {
  variant?: variant;
  children: React.ReactNode | any;
}

type variant = "pageHeading" | "sectionHeading";

export default function Text(props: TextProps) {
  const { variant = "pageHeading", children } = props;
  const componentTag: { [P in variant]: React.ComponentType<any> | string } = {
    pageHeading: "h1",
    sectionHeading: "h2",
  };

  const style = clsx({
    [s.h1]: variant === "pageHeading",
    [s.h2]: variant === "sectionHeading",
  });

  const Component: React.ComponentType<any> | string = componentTag[variant];

  return <Component className={style}>{children}</Component>;
}
