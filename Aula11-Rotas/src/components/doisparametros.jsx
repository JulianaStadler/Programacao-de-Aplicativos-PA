function DoisPametros({ categoria, id }) {
  return (
    <div style={{
        width: "200px",
        padding: "20px",
        borderRadius: "5px",
        border: "3px solid black"
    }}>
      <h2>Categoria: {categoria}</h2>
      <h2>Id: {id}</h2>
    </div>
  );
}

export default DoisPametros;