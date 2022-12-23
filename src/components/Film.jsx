import EmptyStar from "./EmptyStar";
import FullStar from "./FullStar";

export default function Film(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "3rem",
      }}
    >
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
      <div>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((index) => (
          <span onClick={() => props.setRating(index)}>
            {props.filmShown ? (
              props.rating < index ? (
                <EmptyStar />
              ) : (
                <FullStar />
              )
            ) : (
              <></>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
