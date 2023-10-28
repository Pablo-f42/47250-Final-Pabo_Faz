import React from 'react';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import NavBar from './NavBar/NavBar';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }  />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App