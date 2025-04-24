import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

export default function Card({ user }) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <div className="card__tags">
        {user.roles.map((role) => (
          <Tag key={role} tag={role} />
        ))}
      </div>
    </div>
  );
}

