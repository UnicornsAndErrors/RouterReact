import React from 'react'
import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <ul className="nav-links">
            <NavLink to="/">
                <li>Početna</li>
            </NavLink>
            <NavLink to="/lokacija">
                <li>Lokacija</li>
            </NavLink>
            <NavLink to="/kontakt">
                <li>Kontakt</li>
            </NavLink>
        </ul>
    </nav>
  )
}

export default NavBar