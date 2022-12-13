import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useEffect from 'react';

const Bank = ({bank}:any) => {
  const {country_code,id,linkId,text_logo}=bank
  const path=linkId?`/bankdetails/${linkId}/${id}`:`/login/${id}`
  const contrycode=country_code?country_code.toLowerCase():'';
  
  const country=`https://flagcdn.com/${contrycode}.svg`
  
  
    return (
    <Link to={path}>
    
    <div className='bankImage'>
        
        <img src={text_logo} alt="" />
        
    </div>
    <div className='container-country'>
        <img  src={country}/>
    </div>
    </Link>
  )
}

export default Bank