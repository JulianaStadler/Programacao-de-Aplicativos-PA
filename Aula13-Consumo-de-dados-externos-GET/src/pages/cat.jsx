import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios";

export default function Cat() {
  const [cat, setCat] = useState({});

  useEffect(() => {
    getCat();
  }, []);

  const getCat = async () => {
    const response = await axios.get('https://cataas.com/cat');
    console.log(response.data)
    setCat(response.data)
  }


  return (
    <>
      <button type="button" onClick={() => {getCat()}} style={{position: 'absolute', top: "100px", transform: "translate(-50%, 0)", background: "green"}}>New Cat</button> <br /> <br />
      <img src={cat.url} alt="opa" srcset="" style={{maxWidth: "100%"}} />
    </>
  )
}