export default function Cookie(props) {
  const { title, action } = props;
  return (
    <div className="absolute bottom-0 bg-black w-full h-20">
      <p>{title}</p> {action && action}
    </div>
  );
}
