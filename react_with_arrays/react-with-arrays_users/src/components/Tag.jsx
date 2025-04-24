import "./Tag.css";

export default function Tag({ tag }) {
  const className = tag === "admin" ? "tag tag--highlight" : "tag";

  return <span className={className}>{tag}</span>;
}
