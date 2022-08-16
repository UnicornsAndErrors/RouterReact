import React from 'react';
import NavBar from "../NavBar";
import {Link}  from "react-router-dom";

const Pocetna = () => {
  return (
    <div>
        <NavBar />
        
        <h1>Početna</h1>
        <Link to="/kontakt">Kontakt</Link> 

    </div>
  )
}

export default Pocetna