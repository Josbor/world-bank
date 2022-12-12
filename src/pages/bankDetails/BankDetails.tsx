import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Account from '../../components/account/Account'
import Header from '../../components/Header'
import './BankDetails.scss'
import { useStoreControl } from '../../hooks/useStoreControl';
import {useEffect} from 'react';
import useLoading from '../../hooks/useLoading';
import HeaderAccount from './HeaderAccount';
import BankLogo from './BankLogo'
import AccountContainer from './AccountContainer'

const BankDetails = () => {
    const { id,idBank } = useParams()
    const {getAccounInfo}=useStoreControl();
    const [accountInfo,setAccountInfo]=useState<any>([]);
    const {setOpen,Loading}=useLoading()
    
    useEffect(() => {
      setOpen(true)
      if (id) getAccounInfo(id,Number(idBank)).then(data=>setAccountInfo(data)).then(()=>setOpen(false))
    
      
    }, [])
    
    return (
    <div>
      <Header header={{path:'/',tittle:'Cuentas',help:"elija una cuenta para ver sus transacciones"}}/>
          <BankLogo img={accountInfo.bank?accountInfo.bank.text_logo:''}/>
          <HeaderAccount owners={accountInfo.owners}/>
          <AccountContainer list={accountInfo.accounts?accountInfo.accounts:[]}/>
      <Loading/>
    </div>
  )
}

export default BankDetails