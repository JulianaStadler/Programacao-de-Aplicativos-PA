import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("")
  const [opa, setQ] = useState(0)

  return (
    <>
      <hr />
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Incrimentar</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrementar</button><br /> <br />
      <hr />
      <br />
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
      <h1>{texto}!</h1>
      <br />
      <hr />
      <br />
      <button onClick={() => setQ((opa) => opa == 1 ? 0 : 1)}> ????? </button><br />
      <h1 style={{opacity: opa, transition: "1s"}}>Eu existo?</h1>
      <br /> 
      <hr />

    </>
  )
}

export default App