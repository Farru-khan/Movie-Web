import React from 'react'
import {useNavigate} from 'react-router-dom'
import Favgif from './Favgif'
import Favstick from './Favstick'
const Favourite = () => {
  const back = useNavigate()
  const auth = JSON.parse(localStorage.getItem('data'))
  const gifs = JSON.parse(localStorage.getItem('GIF'))||[]
  const stick = JSON.parse(localStorage.getItem('STI'))||[] 
  if (auth)
    return (
      <>
          <button onClick={()=>back('/')}>Go back</button>
        {gifs ?<Favgif gifs={gifs}/>:<h4>No GIFS</h4>}
        {stick ?<Favstick  stick={stick}/>:<h4>No STICKERS</h4>}
      </>
    )

  return (
    <>
    </>
  )
}

export default Favourite
