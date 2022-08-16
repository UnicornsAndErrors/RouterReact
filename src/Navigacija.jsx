import React from 'react'
import {Outlet} from "react-router-dom"
import NavBar from "./NavBar"

const Navigacija = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default Navigacija