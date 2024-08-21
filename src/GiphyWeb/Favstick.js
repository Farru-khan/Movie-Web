import React from 'react'
import './Multi.css'
function Favstick({stick}) {
  return (
    <>
      <div className='gifs'>
    {stick && stick.map((g)=>(<div key={g.id} className='images'>
      <img src={g.images?.fixed_height.url} alt='title'/>
      <button className='btn1'><a href={g.images?.fixed_height.url} rel='noreferrer' target='_blank'>View</a></button>
        </div>))}
        </div>
    </>
  )
}

export default Favstick
