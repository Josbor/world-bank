import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './Account.scss'

const Account = () => {
  return (
    <div className='account'>
      <div className='type-account'>
        <h3>Cuenta Corriente</h3>
        <p>xxxxxxxxxxx3582</p>
      </div>
      <div className='account-balance'>
        <p>SALDO ACTUAL</p>
        <h3>$100</h3>
      </div>
      <div className='account-footer'>

        <Link to='/'>
          <p>
            VER MOVIMIENTOS
          </p>
        </Link>

      </div>
    </div>
  )
}

export default Account
