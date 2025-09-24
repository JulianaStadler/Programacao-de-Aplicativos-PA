import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [cat, setCat] = useState({});

  useEffect(() => {
    getCat();
  }, []);

  const getCat = async () => {
    const response = await axios.get('https://cataas.com/cat/gif');
    console.log(response.data)
    setCat(response.data)
  }



  return (
    <>
      <button type="button" onClick={() => {getCat(); alert("changing cat, await")}} style={{position: 'absolute', top: "10px", transform: "translate(-50%, 0)", background: "green"}}>New Cat</button> <br /> <br />
      <img src={cat.url} alt="opa" srcset="" style={{maxWidth: "100%"}} />
    </>
  )
}

export default App
