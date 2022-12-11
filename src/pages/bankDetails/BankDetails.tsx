import React from 'react'
import { useParams } from 'react-router-dom'
import Account from '../../components/account/Account'
import Header from '../../components/Header'
import './BankDetails.scss'

const BankDetails = () => {
    const { id } = useParams()
    return (
    <div>
      <Header header={{path:'/',tittle:'Transacciones',help:"elija una cuenta para ver sus transacciones"}}/>
     
          <div className='header-account'>
            <h2>Nombre de Cliente</h2>
            <p> Ultima Session</p>
          </div>
          <Account/>
    
    </div>
  )
}

export default BankDetails