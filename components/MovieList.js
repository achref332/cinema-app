import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {movies.length > 0 ? (
        movies.map((m) => <MovieCard key={m.id} movie={m} />)
      ) : (
        <p>Aucun film trouvé...</p>
      )}
    </div>
  );
}

export default MovieList;
