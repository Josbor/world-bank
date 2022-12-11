import React, { useId } from 'react'
import Bank from '../Bank'

import './BanksContainer.scss'

const BanksContainers = ({list}:any) => {

  return (
      <>
      <div className="bank-container">
            {list.length>0&&list.map((bank:any)=><Bank key={useId()} bank={bank.bankDetails?bank.bankDetails:bank}/>)}
       </div>  
      </>
  )
}

export default BanksContainers 