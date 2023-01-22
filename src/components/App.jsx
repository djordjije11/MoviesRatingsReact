import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import Home from "./Home";
import RatedFilms from "./RatedFilms";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route
          element={<Home movies={movies} setMovies={setMovies} />}
          path={"/"}
        />
        <Route
          element={<RatedFilms movies={movies} setMovies={setMovies} />}
          path={"/rated-films"}
        />
      </Routes>
    </BrowserRouter>
  );
}
