import React from 'react'
import Bank from './Bank'

const BanksContainers = ({list}:any) => {

  return (
      <>
      <div className="bank-container">
            {list.length>0&&list.map((bank:any)=><Bank key={bank.bankDetails?bank.bankDetails.id:bank.id} bank={bank.bankDetails?bank.bankDetails:bank}/>)}
       </div>  
      </>
  )
}

export default BanksContainers 