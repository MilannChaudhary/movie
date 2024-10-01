import "./App.css";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";
import React, { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);
  const addMovieToList = (movie) => {
    const tempMv = movieList.filter((item) => item.ImdbID !== movie.ImdbID);
    setMovieList([...tempMv, movie]);
  };

  return (
    <div className="wrapper">
      {/* hero section */}
      <Hero addMovieToList={addMovieToList} />
      {/* display component */}
      <Display movieList={movieList} />
    </div>
  );
}

export default App;
