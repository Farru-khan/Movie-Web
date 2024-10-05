import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Both.css'
import { FaYoutube } from "react-icons/fa";
function Singleshow() {
  const [tv, Settv] = useState({})
    const [cred, Setcred] = useState([])
     const [a, Seta] = useState(0) 
     const [vid, Setvid] = useState()
    const b = 6
    const {id} = useParams() 
   const key = '0fa2853e7c4d6c8f146aba861c5e4a06'
   const Paginate =(a)=>{
    Seta(prev =>(a+1))
   }
    useEffect(()=>{
        const Singledata = async()=>{
          try{
          const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`)
          Settv(data)
          console.log(data);
        }
       catch (error) {
  
      }
  }
   const Credits =async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${key}&language=en-US`)
    console.log(data);  
    Setcred(data.cast)
  }
  const Singlevideo = async()=>{
    try{
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
    Setvid(data.results[0]?.key)
    console.log(data);
  }
  catch (error) {
  
  }
  }
   Singledata()
   Credits()
   Singlevideo()
  },[])
    
    return (
      <>
        {tv && (<div className='sec'>
          <div className='s-1'>
          <div className='gen'><button className='nogen'>Genres</button> - {tv.genres && tv.genres?.map((gen)=><button className='gen-1' key={gen.id}>{gen.name}</button>)}</div>
          <div className='image'><img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt=''/></div>
          </div>
          <div className='detail'>
          <h3>Title - <span>{tv.name}</span></h3>
        <h4>Country origin - <span>{tv.origin_country} </span></h4>
          <h5>Language - <span>{tv.original_language}</span></h5>  
          <p>Overview - <span>{tv.overview}</span></p>
          <h5>Popularity - <span>{tv.popularity}</span></h5>
          <h6>Release date - <span>{tv.release_date}</span></h6>
          <h5>Runtime - <span>{tv.runtime}</span></h5> 
          <h5>Votes - <span>{tv.vote_average}</span></h5>       
          </div>
        </div>)}      
        <h4 className='c-name'>TvShow Cast</h4>
      <div className='cast'>
      {cred && cred?.slice(a * b,a * b + b).map((cr)=>(
    <div className='carousel' key={cr.id}>
      <img src={`https://image.tmdb.org/t/p/w500/${cr.profile_path}`} alt={cr.name}/>
      <b>{cr.name}</b>
    </div>
  ))}
    </div>   
    { a*b+b > cred.length  ?"":(
      <div className='pag'>
      <button className='pagi' onClick={()=>Paginate(a)}>Load more...</button>
      </div>)}
      {vid && <div className='video'>
        <button><a href={`https://www.youtube.com/watch?v=${vid}`}><FaYoutube /> Watch The Trailer</a></button>
      </div>}
    </>
  )
}
export default Singleshow
