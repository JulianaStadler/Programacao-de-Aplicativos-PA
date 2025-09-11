function ProfileCard({ nome, idade, profissao }) {
  return (
    <div style={{
        width: "200px",
        padding: "20px",
        borderRadius: "5px",
        border: "3px solid black"
    }}>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}

export default ProfileCard;