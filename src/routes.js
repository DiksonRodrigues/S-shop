import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Compras from './pages/Compras';
import Cesta from './pages/Cesta';
import Admin from './pages/Admin';
import Login from './pages/Login';

function RoutesApp(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/Cesta' element={ <Cesta/> }/>
      <Route path='/Compras' element={ <Compras/> }/>
      <Route path='/Login' element={ <Login/> }/>
      <Route path='/Admin' element={ <Admin/> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default RoutesApp;