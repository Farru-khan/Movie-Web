import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Both.css';
import { FaYoutube } from "react-icons/fa";
{/*import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";*/}
function Singlemov() {
  const [movie, Setmovie] = useState({})
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
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        Setmovie(data)
        console.log(data);
      }
     catch (error) {

    }
}
const Credits =async()=>{
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
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
Singlevideo()
 Singledata()
 Credits()
},[])
  return (
    <>
      {movie && (<div className='sec'>
        <div className='s-1'>
        <div className='gen'><button className='nogen'>Genres</button> - {movie.genres && movie.genres?.map((gen)=>
        <button className='gen-1' key={gen.id}>{gen.name}</button>)}</div>
        </div>
        <div className='image'><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''/></div>
        <div className='detail'>
        <h3>Title - <span>{movie.title}</span></h3>
      <h4>Country origin - <span>{movie.origin_country} </span></h4>
        <h5>Language - <span>{movie.original_language}</span></h5>  
        <p>Overview - <span>{movie.overview}</span></p>
        <h5>Popularity - <span>{movie.popularity}</span></h5>
        <h6>Release date - <span>{movie.release_date}</span></h6>
        <h5>Runtime - <span>{movie.runtime}</span></h5> 
        <h5>Votes - <span>{movie.vote_average}</span></h5>       
        </div>
      </div>)}      
      <h4 className='c-name'>Movie Cast</h4>
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

export default Singlemov;
