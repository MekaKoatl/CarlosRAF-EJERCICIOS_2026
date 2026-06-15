import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Nombres from './Nombres';

function App() {
  return (
   ( <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/nombres' element={<Nombres/>}></Route>
     </Routes>
     </BrowserRouter>
    </>)
  );
}

export default App;
