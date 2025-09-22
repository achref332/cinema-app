import { useParams, useNavigate } from "react-router-dom";

function MovieDetail({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Film non trouvé...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div style={{ margin: "20px 0" }}>
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        🔙 Retour à l'accueil
      </button>
    </div>
  );
}

export default MovieDetail;
