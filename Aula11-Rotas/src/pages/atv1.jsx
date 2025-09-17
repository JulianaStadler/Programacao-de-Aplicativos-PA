import ProfileCard from "../components/profilecard";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Atv1() {
  const {nome} = useParams();

  return (
    <>
      <h1>Rota 1</h1>
      <hr />
      <p>Use <b>atv1/"palavraqualquer"</b> para alterar o nome do perfil no card</p>
      <hr /><br />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px"
      }}>
        <ProfileCard nome={nome}/>
      </div>
    </>
  );
}
