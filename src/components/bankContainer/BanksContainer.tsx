import React, { useId, useState } from 'react'
import Bank from '../Bank'

import './BanksContainer.scss'
import { useStoreControl } from '../../hooks/useStoreControl';
import {useEffect} from 'react';

const BanksContainers = ({list}:any) => {

  



  return (
      <>
      <div className="bank-container">
            {(list&&list.length)&&list.map((bank:any)=>{
            
            return(

              <Bank key={useId()} bank={bank.bankDetails?bank.bankDetails:bank}/>
              )
            })}
       </div>  
      </>
  )
}

export default BanksContainers 