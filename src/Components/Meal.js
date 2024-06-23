import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
const Meal = () => {
    const [search,setSearch]=useState("");
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=()=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }

return (
    <>
        <div className="main">
            <h4>Search Recipes By Letters</h4>
        <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>

            <div className="heading">
                <h1>Search Your Food Recipe</h1>
          </div>
            <div className="searchBox">
                <input type="search" className="search-bar" placeholder="Search Any Recipe" onChange={e=> setSearch(e.target.value)}/>
                <button onClick={searchRecipe}>Search</button>
            </div>
            <div className="container">
                {
                    show ?<MealItem data={item} /> :"Not Found"
                
                }
            </div>
            
        </div>
    </>
)
}
export default Meal;