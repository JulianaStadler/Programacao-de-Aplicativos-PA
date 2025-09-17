function ProfileCard({ nome }) {
  return (
    <div style={{
        width: "200px",
        padding: "20px",
        borderRadius: "5px",
        border: "3px solid black"
    }}>
      <h2>Perfil: {nome}</h2>
    </div>
  );
}

export default ProfileCard;