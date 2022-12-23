import { useState } from "react";
import EmptyStar from "./EmptyStar";
import FullStar from "./FullStar";

export default function Film(props) {
  const [rating, setRating] = useState(0);

  return (
    <>
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      {}
      {Array.from({ length: 5 }, (_, i) => i + 1).map((index) => (
        <span style={{}} onClick={() => setRating((prev) => index)}>
          {rating < index ? <EmptyStar /> : <FullStar />}
        </span>
      ))}
    </>
  );
}
