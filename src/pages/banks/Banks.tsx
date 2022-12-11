import React, { useEffect } from 'react'
import Bank from '../../components/Bank'
import BanksContainers from '../../components/BanksContainers'
import Header from '../../components/Header'
import { useStoreControl } from '../../hooks/useStoreControl'
import './banks.scss'

const Banks = () => {
    const {banksList,getListBanks}:any=useStoreControl()

    useEffect(() => {
      getListBanks()
        
      
    }, [])
    
   return (
    <div>
      <Header header={{path:'/',tittle:'Seleccione un Banco',help:"Seleccione un banco para ingresar sus datos"}}/>
      <BanksContainers list={banksList}/>
    </div>
  )
}

export default Banks
