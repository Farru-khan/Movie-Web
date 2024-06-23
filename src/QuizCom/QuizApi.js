import React from 'react'
import './QuizApi.css'
import Categories from './Categories'
import { useState } from 'react'
import { json } from 'react-router-dom'
export default function QuizApi({QuesApi,enter, Setenter}) {
const [name, Setname]= useState("")
const [categ, Setcateg]= useState(9)
const [diff, Setdiff] = useState("easy")
const [msg, Setmsg] = useState(false)
const QuizStart =()=>{
  if(!name){
    Setmsg(true)
    Setenter(false)
  }
  if(name.trim !=="" && name !==""){
    Setmsg(false)
    Setenter(true)
    QuesApi(categ,diff,name)  
  } 
}  
return (
  <>
    <div className='heading'>
    <h2>Quiz App</h2>
      </div>
      <section className='quiz-set'>
        <div className='name'>
         <label>Name</label>
         <input type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>Setname(e.target.value)}/>
        </div>
        <div className='name'>
         <label>Select Categories</label>
         <select value={categ} onChange={(e)=>Setcateg(e.target.value)}>
           {Categories.map((cat)=><option key={cat.category} value={cat.value}>{cat.category}</option>)}
         </select>
        </div>
        <div className='name'>
         <label>Select Difficulties</label>
         <select value={diff} onChange={(e)=>Setdiff(e.target.value)}>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
         </select>
        </div>
        <div className='msg'>{msg ?<span>All Feilds Are Required</span>:""}</div>
        <div className='btn'><button onClick={QuizStart}>Start-Quiz</button></div>
      </section>

   
    </>
  )
}
