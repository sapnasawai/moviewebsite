import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Home from './components/Home'
import SingleMovie from './components/SingleMovie';

const App = () => {
  
  return (
    <>
   
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={ <SingleMovie/>} />
      <Route path='*' element={<Error/>} />
     </Routes>
   
    </>
  )
}

export default App;
