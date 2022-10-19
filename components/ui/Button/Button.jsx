import s from "./Button.module.css";

export default function Button(props) {
  const {
    Component = "button",
    children,
    width,
    style = {},
    disabled,
    ...rest
  } = props;

  return (
    <Component
      className={s.btn}
      style={{ width, ...style }}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
}
