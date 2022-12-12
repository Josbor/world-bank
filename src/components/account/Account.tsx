import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './Account.scss'

const Account = ({account}:any) => {
  const {name,balance,currency,category,bank_product_id,id,link}=account
  return (
    <div className='account'>
      <div className='type-account'>
        <h3>{category.replace("_"," ")}</h3>
        <p>xxxxx{bank_product_id.slice((bank_product_id.length-4),bank_product_id.length)}</p>
      </div>
      <div className='account-balance'>
        <p>SALDO ACTUAL</p>
        <h3>{currency}. {balance.current}</h3>
      </div>
      <div className='account-footer'>

        <Link to={`/transactions/${link}/${id}`}>
          <p>
            VER MOVIMIENTOS
          </p>
        </Link>

      </div>
    </div>
  )
}

export default Account
