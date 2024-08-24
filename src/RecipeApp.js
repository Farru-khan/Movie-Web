import React from 'react';
import './Components/Style.css';
import Meal from './Components/Meal';
import Recipe from './Components/Recipe';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Components/login'
import Watch from './Components/Watch'
import ProtectRoute from './Components/Protectroute';
function App() {
  const auth = JSON.parse(localStorage.getItem('recipeuser'))
  return (
    <>
    <Nav/>
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/Favourites' element={<ProtectRoute/>}>
      <Route path='/Favourites'  index element={<Watch/>}/>   
      </Route>
      </Routes>
    </>
  )
}

export default App;