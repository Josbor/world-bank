import React, { useEffect } from 'react'
import Bank from '../../components/Bank'
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
        <div className="bank-container">
            {banksList.length>0&&banksList.map((bank:any)=><Bank key={bank.id} bank={bank}/>)}
       </div>  
    </div>
  )
}

export default Banks
