import React from 'react';
import './Components/Style.css';
import Meal from './Components/Meal';
import Recipe from './Components/Recipe';
import { Routes, Route } from 'react-router-dom';
{/*import RecipeNav from './Components/RecipeNav';
import Login from './Components/login'
import Signup from './Components/Signup'
import  Profile from './Components/Profile';*/}


function App() {
  return (
    <>
    {/*<RecipeNav/>*/}
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      {/*<Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>*/}
      </Routes>
    </>
  )
}

export default App;