import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Ex1() {
  const { id } = useParams();

  return (
    <>
      <h1>Página de usuário simples</h1>
      <p>
        <li>Crie uma rota /users/:id.</li>
        <li>Mostre na tela: Usuário &#123; id &#125;.</li>
      </p>
      <hr /><br />

      <div style={{
        padding: "20px",
        border: "2px solid black",
        borderRadius: "10px"
      }}>
        <h2>
          Usuario: {id}
        </h2>
        {id === "1" ? "Admin" : "Usuário comum"}
        <br />
        <br />
      </div>
    </>
  );
}
