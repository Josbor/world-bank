import React, { Suspense, useEffect } from 'react'
import Bank from '../../components/Bank'
import BanksContainers from '../../components/bankContainer/BanksContainer'
import Header from '../../components/Header'
import { useStoreControl } from '../../hooks/useStoreControl'
import useLoading from '../../hooks/useLoading'
import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

const Banks = () => {
  const listBanks=useSelector((state:RootState)=>state.banks.value)  
  const {getListBanks}:any=useStoreControl()
    const {setOpen,Loading}=useLoading()
    useEffect(() => {
      if (!(listBanks&&listBanks.length))getListBanks()
    
      
    },)
     
    
   return (
    <div>
      <Header header={{path:'/',tittle:'Seleccione un Banco',help:"Seleccione un banco para ingresar sus datos"}}/>
     

      <BanksContainers list={listBanks} />
     
      <Loading/>
    </div>
  )
}

export default Banks
function useloading() {
  throw new Error('Function not implemented.')
}

