import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [films, setFilms] = useState([]);
  const [filmsLoaded, setFilmsLoaded] = useState(false);

  const getFilms = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => {
        setFilms(allFilms);
        setFilmsLoaded(true);
      });
  };

  if (filmsLoaded) {
    return (
      <main className="container">
        <section className="row justify-content-center mt-5">
          <button onClick={getFilms}>See Films</button>
          {films.map(film => (
            <div key={`films-card-${film.id}`}>{film.title}</div>
          ))}
        </section>
      </main>
    );
  } else {
    return (
      <main className="container">
        <section className="row justify-content-center mt-5">
          <button onClick={getFilms}>See Films</button>
        </section>
      </main>
    );
  }
};

export default App;
