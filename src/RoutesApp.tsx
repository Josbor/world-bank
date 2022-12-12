import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BankDetails from './pages/bankDetails/BankDetails';
import Banks from './pages/banks/Banks';
import ErrorPage from './pages/error/ErrorPage';
import Login from './pages/login/login';
import MyBanks from './pages/myBanks/MyBanks';


const RoutesApp = () => {
  return (
    
      <Routes>
          <Route path='/' element={<MyBanks/>}/>
          <Route path='/login/:id' element={<Login/>}/>
          <Route path='/bankDetails/:id/:idBank' element={<BankDetails/>}/>
          <Route path='/banks' element={<Banks/>}/>
          <Route path='*' element={ <ErrorPage />}/>
      </Routes>

  )
}

export default RoutesApp