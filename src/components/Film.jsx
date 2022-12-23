import { useState } from "react";
import EmptyStar from "./EmptyStar";
import FullStar from "./FullStar";

export default function Film(props) {
  const [rating, setRating] = useState(0);

  return (
    <>
      <img
        src={props.image}
        alt={props.title}
        style={
          props.image !== ""
            ? {
                marginTop: "2rem",
                marginBottom: "1rem",
                width: "28rem",
                height: "36rem",
              }
            : {}
        }
      />
      <p style={{ fontSize: "x-large" }}>{props.title}</p>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((index) => (
        <span style={{}} onClick={() => setRating((prev) => index)}>
          {props.filmShown ? (
            rating < index ? (
              <EmptyStar />
            ) : (
              <FullStar />
            )
          ) : (
            <></>
          )}
        </span>
      ))}
    </>
  );
}
