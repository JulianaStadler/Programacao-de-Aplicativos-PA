import ProfileCard from "../components/profilecard";

export default function Atv1() {
  return (
    <>
      <h1>1 - Cartão de Perfil</h1>
      <p>
        Criar um componente ProfileCard que recebe via props: nome, idade e profissão. <br />
        O componente pai deve renderizar 3 cartões diferentes com dados distintos.
      </p>
      <br /><hr /><br />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px"
      }}>
        <ProfileCard nome="Julia" idade="21" profissao="Artista" />
        <ProfileCard nome="Carlos" idade="30" profissao="Engenheiro" />
        <ProfileCard nome="Ana" idade="25" profissao="Designer" />
      </div>
    </>
  );
}
