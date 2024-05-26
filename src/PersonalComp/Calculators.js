import React, { useState } from 'react'
const Calculators = () => {
  const [princepal, Setprincepal] =useState("")
  const [interest, Setinterest]= useState("")
  const [tenure, Setenure] =useState("")
 const [emi, Setemi] =useState("")

const [value, setCl]=useState()

  const CalculateEMI = ()=>{
   const p = parseFloat(princepal)
   const r = parseFloat(interest)/(12*10)
   const n = parseFloat(tenure)   
 
   if(princepal==="" || interest==="" || tenure===""){
    alert("feilds cant be empty to calculate Emi")
   }
   if(p>0 && r>0 && n>0){
    const emivalue = (p * r* Math.pow(1+r, n))/(Math.pow(1+r,n)-1);
    Setemi(emivalue.toFixed(2))
   }
   else{
    alert("please fill all the feilds positve integer")
    Setemi(null)
   }
  }
  return (
    <>
    <h2>Calculators</h2>
    <section className='timeline'
     style={{display:"flex", margin:"auto", flexDirection:"column", width:"300px", height:"400px",
     alignContent:"center", border:"5px black"}}>
<div className='row'>
  <h3>Emi Calculator</h3>
  <div className='input' style={{marginTop:"10px", display:"flex", flexWrap:"wrap", gap:"6px"}}>
    <label>
      Total Loan Amount
      </label>
      <input type='text' value={princepal} onChange={e=>Setprincepal(e.target.value)} placeholder='Enter Loan Amount'/>
  </div>
  <div className='input'style={{marginTop:"10px", display:"flex", flexWrap:"wrap", gap:"6px" }} >
    <label>
      Interest Rate (%)
      </label>
      <input type='text' value={interest} onChange={e=>Setinterest(e.target.value)} placeholder='Enter Loan Interest'/>
  </div>
  <div className='input' style={{marginTop:"10px", display:"flex", flexWrap:"wrap", gap:"6px"}}>
    <label>
      Loan Tenure (Months)
      </label>
      <input type='text' value={tenure} onChange={e=>Setenure(e.target.value)} placeholder='loan Tenures'/>
  </div>
  <button className='button' style={{marginTop:"10px", width:"150px", height:"30px", 
  background:"black", color:"white", border:"none", outline:"none"}} 
  onClick={CalculateEMI}>Calculate-EMI</button>
</div>
<h5>{emi}</h5>
</section>

      <form action='' className='form' style={{display:"flex", 
      flexDirection:"column", margin:"auto", height:"500px", width:"300px"}}>
       <div className='text' style={{display:"flex"}}>
        <input type='text' value={value} onChange={e=> setCl(e.target.value)} placeholder='start-calculation'/>
       </div>
     <div className='btn' style={{display:"flex", flexDirection:"row", gap:"3px"}}>
          <input type='button' value="AC" onClick={e=>setCl("")}/>
          <input type='button' value="DE" onClick={e=>setCl(value.slice(0,-1))}/>
          <input type='button' value="." onClick={e=>setCl(value + e.target.value)}/>
          <input type='button' value="/" onClick={e=>setCl(value + e.target.value)}/>
       </div>
       <div className='btn'style={{display:"flex", flexDirection:"row", gap:"3px"}} >
          <input type='button' value="7" onClick={e=>setCl(value + e.target.value)}/>
          <input type='button' value="8" onClick={e=>setCl(value + e.target.value)} />
          <input type='button' value="9" onClick={e=>setCl(value + e.target.value)} />
          <input type='button' value="*" onClick={e=>setCl(value + e.target.value)} />
       </div>
       <div className='btn' style={{display:"flex", flexDirection:"row", gap:"3px"}}>
          <input type='button' value="4" onClick={e=>setCl(value + e.target.value)}/>
          <input type='button' value="5" onClick={e=>setCl(value + e.target.value)} />
          <input type='button' value="6" onClick={e=>setCl(value + e.target.value)} />
          <input type='button' value="+" onClick={e=>setCl(value + e.target.value)} />
       </div>
       <div className='btn' style={{display:"flex", flexDirection:"row", gap:"3px"}}>
          <input type='button'value="1" onClick={e=>setCl(value + e.target.value)}/>
          <input type='button' value="2"onClick={e=>setCl(value + e.target.value)} />
          <input type='button' value="3" onClick={e=>setCl(value + e.target.value)}/>
          <input type='button' value="-" onClick={e=>setCl(value + e.target.value)}/>
       </div>
       <div className='btn' style={{display:"flex", flexDirection:"row", gap:"3px"}}>
          <input type='button' value="00"onClick={e=>setCl(value + e.target.value)} />
          <input type='button' value="0" onClick={e=>setCl(value + e.target.value)}/>
          <input type='button' value="=" onClick={e=>setCl(eval(value))}/>
       </div>
      </form>
    </>
  )
}

export default Calculators
