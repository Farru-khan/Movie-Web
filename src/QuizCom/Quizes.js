import React, { useEffect, useState } from 'react'
import QuesApi from './QuizApi'
import Start from './Starts'
import './Quizes.css'
export default function Quizes({questions,pass,Setpass,value}){
 {/*useEffect(()=>{
    console.log(questions);
  },[])*/}
  
  const [current, Setcurrent]= useState(0)
  const [correct, Setcorrect] = useState([])
  const Exit= ()=>{
    Setpass(false)
  }
  const Goahed = ()=>{
    Setcurrent(current + 1)
  }
  const Goahedwith =(corrans)=>{
  Setcurrent(current + 1)
  Setcorrect([...correct,corrans])
  }
    return (
    <>
   
  
      
      {/*questions && questions.map((ques,i)=>(<section key={i} className='quizes'>
       {ques[current]?.question}
      {ques.incorrect_answers && ques[current]?.incorrect_answers.map((ans,ind)=><p key={ind}><button type='radio'>{ans}</button></p>)}
       <p><button type='radio'>{ques[current]?.correct_answer}</button></p>
      </section>))*/}
      
      <div className='title'>
        <h3>Hello {value} start playing quiz</h3>
      </div>  
      <div className='questions'>
        <h4>{questions && questions[current]?.category}</h4>
        <h4 className={current > questions.length - 1 ? "no":"quno"}>
          Question No : {current > questions.length - 1 ? "" :current + 1 }</h4>
      <h5>{questions && questions[current]?.question}</h5>
      <h5>Select any one answer from this four options :- </h5>
    <div className={current > questions.length-1?"none":'ans'}>
      {questions && questions[current]?.incorrect_answers.map((inc,i)=>
      <button className="click" onClick={Goahed} key={i}>{inc}</button>)}
    <button className="click" onClick={()=>Goahedwith(questions && questions[current]?.correct_answer)}>
      {questions && questions[current]?.correct_answer}</button>
      </div>
      <div className='butts'>
      {current > questions.length-1 ?
      <h4>Your Correct Answers <span>{correct.filter((corr)=>corr).length}
      </span> Out of <span>{questions.length} Questions</span></h4>:""
}
      <h2>{current > questions.length - 1 ? "Game Over !" : "If You Want To End The Quiz !"}</h2>
      <button className='btn-2'onClick={Exit}>Exit</button>
    </div> 
    </div>
    

        </>
  )
}
