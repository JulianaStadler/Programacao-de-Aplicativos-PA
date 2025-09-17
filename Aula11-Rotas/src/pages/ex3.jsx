import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Ex3() {
  const navigate = useNavigate();

  const handleNavigate = (a) => {
    console.log("navigate");
    navigate(a)
  }  

  return (
    <>
      <h1>Rota condicional</h1>
      <p>
        <li>Em /users/:id, se o id for 1, mostre “Admin”.</li>
        <li>Caso contrário, mostre “Usuário comum”.</li>
      </p>
      <hr /><br />
      <button onClick={() => handleNavigate("/users/1")}>Caso Admin</button>
      <button onClick={() => handleNavigate("/users/2")}>Caso Falso</button>
      
    </>
  );
}
