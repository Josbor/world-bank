import React, { useId } from 'react'
import Transaction from './Transaction'
import './TransactionContainer.scss'
const TransactionContainer = ({list}:any=[]) => {
 
    return (
    <div className='transaction-container'>
         {list.length>0&&list.map((data:any)=>
          <Transaction key={useId()} transaction={data}/>
         )}
       
    </div>
  )
}

export default TransactionContainer