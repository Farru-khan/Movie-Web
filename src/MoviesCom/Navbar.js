import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
    <Link to="/" className="title">
      Movie-House
    </Link>
    <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/tv-shows">Tv-shows</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
