import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HelloWorld } from './components/helloworld'
import { Fanonima } from './components/fanonima'
import { Ffuncao } from './components/ffuncao'
import { Fflecha } from './components/fflecha'
import { Quadrado } from './components/quadrado'
import { QuadradoAzul } from './components/quadradoazul'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld />
      <Fanonima />
      <Fflecha />
      <Ffuncao />
      <Quadrado  cor="red" />
      <Quadrado  cor="green" />
      <Quadrado  cor="blue" />
      <QuadradoAzul />
    </>
  )
}

export default App
