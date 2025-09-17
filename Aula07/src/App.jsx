import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("")
  const [opa, setQ] = useState(0)
  const [cor, setCor] = useState("#dddddd")
  const handleChange = (e) => {
    setCor(e.target.value);
  };

  const [num, setNum] = useState(0)
  useEffect(() => {
    console.log("O conteúdo da página foi alterado")
    console.log(`O novo estado da variável é ${num}`)
  }, [num]); //sem nenhuma depencia so e executado quando a pagina carrega
  // com a dependencia num quando o num e alterado ele gera um novo console.log
  return(
    <>
      <button onClick={() => setNum(num => num + 1)}>incrementar</button><br /><br />
      <h1>{num}</h1>
    </>
  )

  return (
    <>
        <button onClick={() => setCount((count) => count + 2)}> Count is {count}</button><br /> <br />
        <hr />
        <br />
        <input type="text" onChange={(e) => setTexto(e.target.value)} />
        <h1>Bem vindo(a) {texto}!</h1>
        <br /> 
        <hr />
        <br />
        <button onClick={() => setQ((opa) => opa == 1 ? 0 : 1)}> ????? </button><br />
        <h1 style={{opacity: opa, transition: "1s"}}>Eu existo?</h1>
        <br /> 
        <hr />
        <br />
        <input type="color" value={cor} onChange={handleChange}/>
        <div style={{
          width: "100px", height: "100px", border: "2px solid black", margin: "10px auto",
          background: cor
        }}></div>

    </>
  )
}

export default App