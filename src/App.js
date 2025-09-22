import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [movies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief enters people's dreams to steal secrets.",
      posterURL: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Explorers travel through a wormhole in space.",
      posterURL: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      m.rating >= filterRate
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1 style={{ textAlign: "center" }}>🎬 Ma Bibliothèque de Films</h1>
            <Filter setFilterTitle={setFilterTitle} setFilterRate={setFilterRate} />
            <MovieList movies={filteredMovies} />
          </div>
        }
      />

      <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
    </Routes>
  );
}

export default App;
