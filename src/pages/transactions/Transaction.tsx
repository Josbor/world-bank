import React, { useId } from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Transaction = ({transaction}:any=[]) => {
  const {amount,reference,status,type,currency,description}=transaction  
  console.log({transaction})
    return (
    <>
   
            <div  className='transaction'>
                <div className='type'>
                  {type=='INFLOW'?<ControlPointIcon color='success'/>:<RemoveCircleOutlineIcon color='warning'/>}
                 </div>
                <div className='description'>{description}</div>
                <div className={`amount ${type=='OUTFLOW'&&'red'}`} >{currency}. {amount}</div>
                <div></div>
            </div>
            
        
        
    </>
  )
}

export default Transaction