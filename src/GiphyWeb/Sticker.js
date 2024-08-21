import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { IoSearchSharp } from "react-icons/io5";
import './Multi.css'
const Sticker = () => {
  const auth = JSON.parse(localStorage.getItem('data'))
 const [query, Setquery] = useState('')
 const [load, Setload] =useState(false)
  const key = 'M3iZPfifbyVgA905QHX6FK0YDfCdMtGH'
  const [url, Surl] = useState(`https://api.giphy.com/v1/stickers/trending?api_key=${key}&limit=30&offset=0&rating=g&bundle=messaging_non_clips`)
  const [stick, Setstick] = useState([])
  const [error, Seterror] =useState()
  const CallApi = async()=>{
    Setload(true)
    try{
      Setload(false)
    const {data} = await axios.get(url)
    const result = data.data
   Setstick(result)
    }
    catch(error){
     Seterror(error);       
    }
  }

  useEffect(()=>{
  CallApi()
  },[url])

  const Search = async()=>{
    Surl(`https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${query}&limit=30&offset=0&rating=g&bundle=messaging_non_clips`)
    Setload(true)
    if(query ===""){
    alert('Search field cant be empty')
    CallApi()
  }
  try{
    Setload(false)
    const {data} = await axios.get(url)
    const result = data.data
   Setstick(result)
    }
    catch(error){
     Seterror(error);
     
    }
  }
  const Watchlist = (sti)=>{
    if(auth){
     const check = JSON.parse(localStorage.getItem('Sticker'))||[]
     const exist = check.find((ch)=> ch.id === sti.id) 
     if(exist){
     alert('Gif already added')
   }
   else{
     localStorage.setItem('Sticker', JSON.stringify([...check,[...sti]]))
   }
    }
 }
  return (
    <>
    {error ? <p>Server Error</p>:
    <section className='sect'>
      <div className='in'><input type='text' placeholder='Search any Sticker' value={query} 
      onChange={(e)=> Setquery(e.target.value)}/>
      <button onClick={Search}><IoSearchSharp /></button></div>
      <div className='gifs'>
    {load ? <p>Loading</p>:stick.map((sti)=>(<div key={sti.id} className='images'>
      <img src={sti.images.fixed_height.url} alt='title'/>
      <button className='btn1'><a href={sti.images.fixed_height.url} rel='noreferrer' target='_blank'>View</a></button>
      <button className='btn2' onClick={()=>Watchlist(stick)}>Watchlist</button>
        </div>))}
        </div>
        </section>}
    </>
  )
}

export default Sticker
