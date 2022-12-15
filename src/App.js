import React from 'react';
import Home from './Pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviedDetails from './Pages/MovieDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path= '/:id' element={<MoviedDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
