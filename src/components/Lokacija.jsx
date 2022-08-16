import React from 'react'
import {useNavigate} from "react-router-dom"

const Lokacija = () => {
  let navigate = useNavigate();
  return (
    <div>
        <h1>Lokacija</h1>
        <button onClick={() => {navigate("/")}}>Nazad na početnu</button>
    </div>
  )
}

export default Lokacija