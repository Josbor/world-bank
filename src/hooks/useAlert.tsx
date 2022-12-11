import { Alert } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const useAlert = () => {
    const [message,setmessage]=useState<string>()
    const [type,setType]=useState<string>()
 
 
    const setAlertMessage=(typeAlert:string='success',messageAlert:string)=>{
        setmessage(messageAlert)
        setType(typeAlert)

    }
    
    const AlertMessage=()=>{
        return(
          <>
          {type==='success'&&<Alert severity="success">{message}</Alert>}
          {type==='error'&&<Alert severity="error">{message}</Alert>}
          {type==='info'&&<Alert severity="info">{message}</Alert>}
          {type==='warning'&&<Alert severity="warning">{message}</Alert>}
          </>
          
        )
      }
    
 
 
    return {setAlertMessage,AlertMessage} 
    
  
}

export default useAlert