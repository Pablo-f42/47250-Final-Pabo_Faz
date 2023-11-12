import React from 'react';
import Contador from './Contador/Contador';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import NavBar from './NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider} from './context/CarritoContext';
import Cart from './Cart/Cart';
import Checkout from './Chceckout/Checkout';
import './App.css';

const App = () => {
  return (
    <>

      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h2>Error 404</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </>
  )
}

export default App