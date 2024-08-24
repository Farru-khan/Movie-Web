import React from 'react'
import { Link } from 'react-router-dom';
import './RecipeNav.css';
export default function RecipeNav() {
  return (
    <>
    <div className='navbar'>
        <li><a><Link to="/"><h1>Foodify</h1></Link></a></li>
        <div className='user'><li><a><Link to="/login"><h2>Login</h2></Link></a></li></div>
        </div>    
    </>
  )
}
