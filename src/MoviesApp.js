import React from 'react';
import Movies from './MoviesCom/Movies';
import Navbar from './MoviesCom/Navbar';
import TvShows from './MoviesCom/TvShows';
import Singlemov from './MoviesCom/Singlemov';
import Singleshow from './MoviesCom/Singleshow';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
   
      <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='/tv-shows' element={<TvShows/>}/>
          <Route path='/:id' element={<Singlemov/>}/>
          <Route path='/tv-shows/:id' element={<Singleshow/>}/>
        </Routes>
      </>
    
  );
};

export default App;
