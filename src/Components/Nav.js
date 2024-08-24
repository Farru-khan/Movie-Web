import React, { useState } from 'react'
import './Nav.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
const Nav = () => {
  const auth = JSON.parse(localStorage.getItem('recipeuser'))
  const navigate = useNavigate()
 
  const Exit =()=>{
    if(auth){
    localStorage.removeItem('recipeuser')
    navigate('/')
    }
  }
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
    <Link to="/" className="title">
      Foodzy
    </Link>
    <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
    <li>
        <NavLink to="/">Recipes</NavLink>
      </li>
      <li>
        <NavLink to="/Favourites">Favourites</NavLink>
      </li>
      {auth?<li><button className='but'>{auth.email}</button>
        </li>:""}
      <li className='user'>  
        {auth ?<button onClick={Exit}>Logout</button>:<NavLink to="/Login">Login</NavLink>}
      </li>
     
    </ul>
  </nav>
  )
}

export default Nav