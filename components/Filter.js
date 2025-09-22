function Filter({ setFilterTitle, setFilterRate }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Rechercher par titre..."
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />
      <input
        type="number"
        placeholder="Note minimale"
        min="0"
        max="5"
        onChange={(e) => setFilterRate(Number(e.target.value))}
        style={{ padding: "8px", width: "120px" }}
      />
    </div>
  );
}

export default Filter;
