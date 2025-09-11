import Botao from "../components/botao";

export default function Atv2() {
  return (
    <>
      <h1>2 - Botão Customizado</h1>
      <p>
        Criar um componente CustomButton que recebe como props: texto e cor. <br />
        O botão deve exibir o texto e ter a cor de fundo definida pela prop. <br />
        Renderizar pelo menos 2 botões diferentes.
      </p>
      <br /><hr /><br />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px"
      }}>
        <Botao cor="#ddd" text="Continue"/>
        <Botao cor="red" text="Error"/>
        <Botao cor="green" text="Ok"/>
      </div>
    </>
  );
}
