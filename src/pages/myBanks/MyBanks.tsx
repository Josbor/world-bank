import React, { Suspense, useEffect, useLayoutEffect } from 'react'
import BanksContainers from '../../components/BanksContainers';
import Header from '../../components/Header';
import { useStoreControl } from '../../hooks/useStoreControl';
import useLoading from '../../hooks/useLoading';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import Bank from '../../components/Bank';

const MyBanks = () => {
    const [myBanks,setMyBanks]=useState<any>([])
    const {getLinksBanks}=useStoreControl()
    const {setOpen,Loading}=useLoading()
  
    useEffect(() => {
        setOpen(true)
        getLinksBanks().then((e)=> {
            setMyBanks(e);
            setOpen(false)})
       
    }, [])
    
    return (
    <div>
        <Header header={{tittle:'Mis Bancos',help:"Ingrese se sus credenciales para ingresar al banco"}}/>
       
        <div className="bank-container">
        <BanksContainers list={myBanks}/>
       </div>  
          
        <Loading/>
    </div>
  )
}

export default MyBanks