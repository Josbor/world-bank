import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banks from './pages/banks/Banks';
import Login from './pages/login/login';


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Banks/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp