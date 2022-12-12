import React from 'react'
import './BankLogo.scss'
const BankLogo = ({img}:any) => {
  return (
    <div className='bank-logo'>
        <img src={img} alt="" />
    </div>
  )
}

export default BankLogo