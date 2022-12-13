import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useEffect from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { destroyLink } from '../api/data';
import { useStoreControl } from '../hooks/useStoreControl';
import useLoading from '../hooks/useLoading';


const Bank = ({bank}:any) => {
  const {country_code,id,linkId,text_logo}=bank
  const path=linkId?`/bankdetails/${linkId}/${id}`:`/login/${id}`
  const contrycode=country_code?country_code.toLowerCase():'';
  const country=`https://flagcdn.com/${contrycode}.svg`
  const {getLinksBanks}=useStoreControl()
  const {Loading,setOpen}=useLoading()
 
  
  const handleDelete = ()=>{
    setOpen(true)
    destroyLink(linkId).then((e)=>{
      setOpen(false);
      location. reload();
    })
  }
    
    return (
      <div>
    {linkId&& <ClearIcon className='icon-delete' onClick={handleDelete}/>}
    <div className='bankImage'>
         <Link to={path}>
        <img src={text_logo} alt="" />
        </Link>
    </div>
    <div className='container-country'>
        <img  src={country}/>
    </div>
    <Loading/>
      </div>
    
  )
}

export default Bank