function Botao({ cor, text}) {
  return (
    <div style={{
        padding: "5px 10px",
        borderRadius: "100px",
        border: "3px solid black",
        background: cor
    }}>
      <b style={{padding: 0, margin: 0, color: "black"}}>{text}</b>
    </div>
  );
}

export default Botao;