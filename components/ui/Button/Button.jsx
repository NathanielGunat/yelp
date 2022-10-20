import clsx from "clsx";
import s from "./Button.module.css";

export default function Button(props) {
  const {
    Component = "button",
    variant = "black",
    children,
    width,
    style = {},
    disabled,
    ...rest
  } = props;

  const rootClassName = clsx(s.root, {
    [s.white]: variant === "white",
    [s.black]: variant === "black",
  });

  return (
    <Component
      className={rootClassName}
      style={{ width, ...style }}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
}
