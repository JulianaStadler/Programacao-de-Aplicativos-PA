import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Atv1() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("navigate");
    navigate('/')
  }

  return (
    <>
      <h1>Rota 2</h1>
      <hr />
      <p>Usendo useNavigate() para trocar de páginas</p>
      <hr /><br />

      <button
        onClick={handleNavigate}
      >
        Clique aqui para voltar para a home
      </button>
    </>
  );
}
