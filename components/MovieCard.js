import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "10px",
        padding: "15px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.posterURL}
          alt={movie.title}
          width="200"
          style={{ borderRadius: "5px" }}
        />
      </Link>
      <p style={{ fontWeight: "bold" }}>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
