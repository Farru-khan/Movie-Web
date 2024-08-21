import React from 'react'
import Nav from './GiphyWeb/Nav'
import { Route, Routes } from 'react-router-dom'
import './Giphy.css';
import Gifs from './GiphyWeb/Gifs'
import Sticker from './GiphyWeb/Sticker'
import Login from './GiphyWeb/Login'
import ProtectRoute from './GiphyWeb/ProtectRoute'
import Favourite from './GiphyWeb/Favourite'
const Giphy = () => {
  return (
    <>
    <div className='body'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Gifs/>}/>
        <Route path='/Stickers' element={<Sticker/>}/>
        <Route path='/Favourites' element={<ProtectRoute/>}>
        <Route path='/Favourites'  element={<Favourite/>}/>
        </Route>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </div>
    </>
  )
}

export default Giphy
