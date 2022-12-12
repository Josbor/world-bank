import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import BankLogo from '../bankDetails/BankLogo'
import { useStoreControl } from '../../hooks/useStoreControl';
import { useParams } from 'react-router-dom';
import TransactionContainer from './TransactionContainer';

const Transactions = () => {
  const [transactions,setTransactions]=useState()
  const {link,idAccount}=useParams()
  console.log({link,idAccount})
  const {getListTransaccions}=useStoreControl()
  
  useEffect(() => {
    if (link&&idAccount) getListTransaccions(link,'2022-12-01','2022-12-11',idAccount).then((data=>setTransactions(data)))
  
  }, [])
  
  return (
    <>
      <Header header={{ path: '/', tittle: 'Transacciones', help: "elija una cuenta para ver sus transacciones" }} />
       {/* <BankLogo img={accountInfo.bank ? accountInfo.bank.text_logo : ''} /> */}
      <TransactionContainer list={transactions||[]}/>
    </>
  )
}

export default Transactions