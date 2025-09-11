import BooleanMsg from "../components/booleanmsg";

export default function Atv3() {
  return (
    <>
      <h1>3 - Mensagem Condicional</h1>
      <p>
        Criar um componente Mensagem que recebe uma prop booleana logado. <br />
        Se true, mostrar: "Bem-vindo de volta!". <br />
        Se false, mostrar: "Por favor, faça login.".
      </p>
      <br /><hr /><br />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px"
      }}>
        <BooleanMsg status={true}/>
        <BooleanMsg status={false}/>
        <BooleanMsg status="srg"/>
      </div>
    </>
  );
}
