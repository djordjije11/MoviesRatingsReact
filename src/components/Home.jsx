import { TMDB_API_KEY } from "../constants";
import Film from "./Film";
import { useState } from "react";

export default function Home() {
  const [txtState, setTxtState] = useState("");
  const [filmTitle, setFilmTitle] = useState("");
  const [filmImageUrl, setFilmImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const filmShown = filmTitle !== "";

  const getMovie = async function (title) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${title}`
    );
    const responseJson = await response.json();
    setFilmImageUrl(
      (prev) =>
        `https://image.tmdb.org/t/p/original/${responseJson.results[0].poster_path}`
    );
    setFilmTitle((prev) => responseJson.results[0].title);
  };

  return (
    <>
      <h1
        style={{
          marginTop: "2rem",
          height: "4rem",
          textAlign: "center",
        }}
      >
        Rate a movie
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          onClick={() => {
            setFilmTitle((prev) => "");
            setFilmImageUrl((prev) => "");
            setMessage((prev) => "");
          }}
          type="text"
          value={txtState}
          onChange={(event) => setTxtState((prev) => event.target.value)}
        />
        <button onClick={() => getMovie(txtState)}>Search</button>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "large",
        }}
      >
        <Film
          title={filmTitle}
          image={filmImageUrl}
          setMessage={setMessage}
          filmShown={filmShown}
        />
        <p style={{ marginTop: 15, fontSize: "x-large" }}>{message}</p>
        {filmShown ? (
          <button
            style={{ width: "10rem", height: "3rem", marginBottom: "1rem" }}
            onClick={() => setMessage((prev) => "Hvala na dodeljenoj oceni!")}
          >
            Save a rating
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
