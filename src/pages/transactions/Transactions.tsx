import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import BankLogo from '../bankDetails/BankLogo'
import { useStoreControl } from '../../hooks/useStoreControl';
import { useParams } from 'react-router-dom';
import TransactionContainer from './TransactionContainer';
import TransactionTable from './TransactionTable';
import { getAccountDetails, getInstitutions } from '../../api/data';
import { Box, fontSize } from '@mui/system';
import { Paper } from '@mui/material';
import './Transactions.scss'
import useDatePicker from '../../hooks/useDatePicker';
import useLoading from '../../hooks/useLoading';

const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const [account, setAccount] = useState<any>()
  const [bankImage, setBankImage] = useState('')
  const { link, idAccount } = useParams()
  console.log({ link, idAccount })
  const { getListTransaccions } = useStoreControl()
  const [dateFromState,dateToState, DateFromPicker] = useDatePicker('Desde','Hasta')
  const {Loading,setOpen}=useLoading()
  
  const today = new Date();
  const  formatToday= today.toISOString().slice(0,10);

console.log(formatToday); 
  useEffect(() => {
    if (link && idAccount){
      if (dateFromState){
          if(dateToState) {
            setOpen(true);
            getListTransaccions(link, dateFromState, dateToState, idAccount).then((data =>{
              
              setTransactions(data)
              setOpen(false);
            }))
          }
         
      }
  
    }
  
    
  }, [dateFromState,dateToState])
  


  useEffect(() => {
    if (link && idAccount) {
      getListTransaccions(link, '2022-12-01', '2022-12-11', idAccount).then((data => setTransactions(data)))
      getAccountDetails(idAccount).then((data) => {
        setAccount(data)
        getInstitutions().then(banks => {
          const { name } = data.institution
          const { text_logo } = banks.find((bank: any) => bank.name == name)
          setBankImage(text_logo)

        })
      }
      )
    }


  }, [])

  const BoxStyle = {
    maxWidth: { xs: '75%', md: 600, lg: 800 },
    margin: '0 auto',
    marginBottom: 2,
    borderRadius: '8px',
    color: 'white',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    columnGap:1

  }

  return (
    <>
      <Header header={{ path: `/transaction/${link}/${idAccount}`, tittle: `${account ? account.category : ''}`, help: "elija una cuenta para ver sus transacciones" }} />
      <BankLogo className='image-transaction' img={bankImage ? bankImage : ''} />
      <Box className='box-amount' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
        <p>SALDO ACTUAL</p>
        <h1>{account ? account.currency : ''}. {account ? account.balance.available : ''}</h1>
      </Box>
      <Box component={Paper} sx={{ ...BoxStyle, background: '#6767e1' }}>
        <h2 className='tittle-account'>{account ? account.name : ''}</h2>
        <p className='number-account'>xxxxx{account ? account.bank_product_id.slice(account.bank_product_id.length - 4, account.bank_product_id.length) : ''}</p>
      </Box>
      <Box component={Paper} sx={{...BoxStyle,paddingTop:1,paddingBottom:1}}>
        <DateFromPicker />
      </Box>
      <TransactionTable transactions={transactions || []} />
      <Loading/>
    </>
  )
}

export default Transactions