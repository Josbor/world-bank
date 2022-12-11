import React, { Suspense, useEffect, useLayoutEffect } from 'react'
import Header from '../../components/Header';
import { useStoreControl } from '../../hooks/useStoreControl';
import useLoading from '../../hooks/useLoading';
import { CircularProgress, Fab } from '@mui/material';
import { useState } from 'react';
import BanksContainers from '../../components/bankContainer/BanksContainer';
import './MyBanks.scss'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const MyBanks = () => {
    const [myBanks,setMyBanks]=useState<any>([])
    const {getLinksBanks}=useStoreControl()
    const {setOpen,Loading}=useLoading()
    const navigate=useNavigate()
    useEffect(() => {
        setOpen(true)
        getLinksBanks().then((e)=> {
            setMyBanks(e);
            setOpen(false)})
       
    }, [])
    const fabStyle = {
        position: 'absolute',
        bottom: 20,
        right: 25,
      };
    
    return (
    <div>
        <Header header={{tittle:'Mis Bancos',help:"Ingrese se sus credenciales para ingresar al banco"}}/>
       
        <div className='bank-containers'>
            
        <BanksContainers list={myBanks}/>
        </div>
        <Fab color="primary"
         aria-label="add" 
         sx={{position:'absolute',bottom:{xs:15,sm:25,md:35,lg:45,xl:55},right:{xs:15,sm:25,md:35,lg:45,xl:55}}} 
         size='large' 
         onClick={()=>navigate('/banks')}>
                <AddIcon />
            </Fab>
          
        <Loading/>
    </div>
  )
}

export default MyBanks