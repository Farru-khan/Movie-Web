import React, { useEffect, useState } from 'react'
import QuizApi from './QuizApi';
import Quizes from './Quizes'
import axios from 'axios';
import { json } from 'react-router-dom';
export default function Header() {
  const [allquestion, Setquestion]= useState([])
  const [pass, Setpass]= useState(false)
  const [enter,Setenter] =useState(false)
  let value;
  {/*const [current, Setcurrent]=useState(0)*/}
  const QuesApi = async(categ, diff,name)=>{
    try{
      Setpass(true)
      value = name
      const {data} = await axios.get(`https://opentdb.com/api.php?amount=10&${categ && `category=${categ}`}&${diff && `difficulty=${diff}`}&type=multiple`)
     Setquestion(data && data.results)
    console.log(data.results);}
    catch(error){
      console.log(error);
    }
    
       }
       
  return (
    <>
  {pass?<Quizes questions={allquestion} pass={pass} Setpass={Setpass} value={value}/>:
  <QuizApi QuesApi={QuesApi} enter={enter} Setenter={Setenter}/>
    }
    </>
  )
}

