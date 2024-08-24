import React, { useEffect, useState } from 'react'
import'./Style.css'
function Watch() {
  const rec = JSON.parse(localStorage.getItem('recipes'))||[]
  console.log(rec,'rec');
  return (
    <>
   {rec && rec?.map((ex)=>{<div className="content" key={ex.idMeal}>
                    <img src={ex.strMealThumb} alt="" />
                    <div className="inner-content">
                        <button>Remove</button>
                        <h3>{ex.strMeal}</h3>
                        <h3>Food {ex.strArea}</h3>
                        <h3>Category {ex.strCategory}</h3>
                    </div>
                    </div>})}
    </>
  )
}

export default Watch