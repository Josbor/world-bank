import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useEffect from 'react';

const Bank = ({bank}:any) => {
  const [path,SetPah]=useState<string>(`/login/${bank.id}`)
  const navigate=useNavigate()
  
  console.log(bank)
  
    return (
    <Link to={path}>
    
    <div className='bankImage'>
        <img src={bank.text_logo} alt="" />
    </div>
    </Link>
  )
}

export default Bank