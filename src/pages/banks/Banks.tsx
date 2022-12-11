import React, { useEffect } from 'react'
import Bank from '../../components/Bank'
import BanksContainers from '../../components/bankContainer/BanksContainer'
import Header from '../../components/Header'
import { useStoreControl } from '../../hooks/useStoreControl'
import useLoading from '../../hooks/useLoading'

const Banks = () => {
    const {banksList,getListBanks}:any=useStoreControl()
    const {setOpen,Loading}=useLoading()
    useEffect(() => {
      setOpen(true)
      getListBanks().then(()=> {setOpen(false)})
      
        
      
    }, [])
    
   return (
    <div>
      <Header header={{path:'/',tittle:'Seleccione un Banco',help:"Seleccione un banco para ingresar sus datos"}}/>
      <BanksContainers list={banksList}/>
      <Loading/>
    </div>
  )
}

export default Banks
function useloading() {
  throw new Error('Function not implemented.')
}

