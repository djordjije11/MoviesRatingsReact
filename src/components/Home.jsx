import { TMDB_API_KEY } from "../constants";
import Film from "./Film";
import { useState } from "react";

export default function Home(props) {
  const [txtState, setTxtState] = useState("");
  const [filmTitle, setFilmTitle] = useState("");
  const [filmImageUrl, setFilmImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const filmShown = filmTitle !== "";

  const getMovie = async function (title) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${title}`
    );
    const responseJson = await response.json();

    console.log(responseJson);

    setFilmImageUrl(
      `https://image.tmdb.org/t/p/original/${responseJson.results[0].poster_path}`
    );
    setFilmTitle(responseJson.results[0].title);
    setRating(0);
  };

  const addMovie = function () {
    props.setMovies((prev) => [
      ...prev,
      {
        title: filmTitle,
        imageUrl: filmImageUrl,
        rating: rating,
      },
    ]);
    setMessage("Thank you for rating a movie!");
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
            setFilmTitle("");
            setFilmImageUrl("");
            setMessage("");
            setRating(0);
          }}
          type="text"
          value={txtState}
          onChange={(event) => setTxtState(event.target.value)}
        />
        <button onClick={() => getMovie(txtState)}>Search</button>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "large",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Film
            title={filmTitle}
            image={filmImageUrl}
            setMessage={setMessage}
            filmShown={filmShown}
            rating={rating}
            setRating={setRating}
          />
        </div>
        <p style={{ marginTop: 15, fontSize: "x-large" }}>{message}</p>
        {filmShown ? (
          <button
            class="btn btn-dark"
            style={{ width: "10rem", height: "3rem", marginBottom: "1rem" }}
            onClick={addMovie}
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
