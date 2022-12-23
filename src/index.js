import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import RatedFilms from "./components/RatedFilms";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<RatedFilms />} path={"/rated-films"} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
