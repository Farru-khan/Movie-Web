import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
    <Link to="/" className="title">
      Personal-Uses
    </Link>
    <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/Calculators">Calculators</NavLink>
      </li>
      <li>
        <NavLink to="/Todo-List">Todo-List</NavLink>
      </li>
      <li>
        <NavLink to="/Expense-Tracker">Expense-Tracker</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
