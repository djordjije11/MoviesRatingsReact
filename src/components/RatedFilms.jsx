import Film from "./Film";

export default function RatedFilms(props) {
  return (
    <>
      <h1
        style={{
          marginTop: "2rem",
          height: "4rem",
          textAlign: "center",
        }}
      >
        Your ratings of movies
      </h1>
      <div
        style={{
          display: "flex",
        }}
      >
        {props.movies.map((movie) => (
          <Film
            title={movie.title}
            image={movie.imageUrl}
            rating={movie.rating}
            filmShown={true}
          />
        ))}
      </div>
    </>
  );
}
