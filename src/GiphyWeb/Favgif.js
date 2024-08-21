import React from 'react'
import './Multi.css'
function Favgif({gifs}) {
  return (
    <>
      <div className='gifs'>
    {gifs && gifs.map((g)=>(<div key={g.id} className='images'>
      <img src={g.images && g.images.fixed_height && g.images.fixed_height.url} alt='title'/>
      <button className='btn1'><a href={g.images && g.images.fixed_height && g.images.fixed_height.url} rel='noreferrer' target='_blank'>View</a></button>
        </div>))}
        </div>
    </>
  )
}

export default Favgif

