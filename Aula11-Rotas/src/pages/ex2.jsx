import DoisParametros from "../components/doisparametros";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Ex2() {
  const {id} = useParams();
  const {category} = useParams();

  return (
    <>
      <h1>Dois parâmetros na URL</h1>
      <p>
        <li>Crie uma rota /products/:category/:id.</li>
        <li>Mostre: Categoria: &#123;category&#125; - Produto: &#123;id&#125;.</li>
        <li>Teste /products/eletronicos/55.</li>
      </p>
      <hr /><br />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px"
      }}>
        <DoisParametros categoria={category} id={id}/>
      </div>
    </>
  );
}
