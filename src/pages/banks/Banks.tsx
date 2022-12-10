import React, { useEffect } from 'react'
import Bank from '../../components/Bank'
import { useStoreControl } from '../../hooks/useStoreControl'

const Banks = () => {
    const {banksList,getListBanks}:any=useStoreControl()

    useEffect(() => {
      getListBanks()
    
      
    }, [])
    
   return (
    <div>
      <header> this is the header </header>
        <div className="bank-container">
            {banksList.length>0&&banksList.map((bank:any)=><Bank key={bank.id} bank={bank}/>)}
       </div>  
    </div>
  )
}

export default Banks
