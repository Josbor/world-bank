import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Bank = ({bank}:any) => {
  const navigate=useNavigate()
  
  const HandleBank=()=>{
   
  navigate('/login')
  }
    return (
    <div className='bankImage' onClick={HandleBank}>
        <img src={bank.text_logo} alt="" />
    </div>
  )
}

export default Bank