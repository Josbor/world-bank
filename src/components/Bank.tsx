import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Bank = ({bank}:any) => {
  const [path,SetPah]=useState<string>('/login')
  const navigate=useNavigate()
  

    return (
    <Link to={path}>
    
    <div className='bankImage'>
        <img src={bank.text_logo} alt="" />
    </div>
    </Link>
  )
}

export default Bank