import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Ex4() {
  const navigate = useNavigate();

  const handleNavigate = (a) => {
    console.log("navigate");
    navigate(a)
  }

  const fake = [1,2,3,4];
  return (
    <>
      <h1>Link dinâmico</h1>
      <p>
        <li>Liste usuários fake (ex.: [1,2,3,4]).</li>
        <li>Cada item deve ser um &lt;Link&gt; para /users/&#123;id&#125;.</li>
        <li>Ao clicar, renderize a página daquele usuário.</li>
      </p>
      <hr /><br />
        {fake.map((user) => (
        <button key={user} onClick={() => handleNavigate(`/users/${user}`)}>{user}</button>
      ))}
    </>
  );
}
