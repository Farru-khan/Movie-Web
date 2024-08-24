import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [email, Setemail] = useState('')
    const [pass, Setpass] = useState('')
    const [message, Setmess] = useState({})
    let data = {}  
    const navigate = useNavigate()
    const Submit = (e)=>{
        e.preventDefault()
       const errors = {}
        if(email ==""){
         errors.email = 'email is required'
        }
        
        {/*else if(!/\S+@\.\S+/.test(email)){
            errors.email = 'email is not valid'
        }*/}
        if(pass==""){
            errors.passw = 'password is required'
           }
           else if(pass.length < 6){
               errors.passw = 'password should be atleast 6 character'
           }
           Setmess(errors)
            if(Object.keys(errors).length===0){
                 data = {email,pass}
                localStorage.setItem('recipeuser', JSON.stringify({...data}))
                navigate('/Favourites')            
                alert('Login sucessful')
                console.log(data);
            }
        }
  return (
    <>
    <div className='head'>
    <h1>Login</h1>
    </div>
     <div className='login'>
        <form onSubmit={Submit}>
        <div className='sec-1'>
            <div className='box'>
                <label>Email</label>
                <input type='text' placeholder='Enter your email' value={email}
                 onChange={(e)=>Setemail(e.target.value)}></input>
                   {message.email && <p>{message.email}</p>}
            </div>
            <div className='box'>
                <label>Email</label>
                <input type='password' placeholder='Enter your password'
                 onChange={(e)=>Setpass(e.target.value)}></input>
                   {message.passw && <p>{message.passw}</p>}
            </div>
            <button>Login</button>
        </div>
        </form>
        <div className='sec-2'>
            <h3>Welcome To Foodzy</h3>
            <h5>Explore the Veg, Non-Veg, Desert and much more</h5>
            <button onClick={()=>navigate('/')}>Recipes</button>
        </div>
        </div> 
    </>
  )
}

export default Login
