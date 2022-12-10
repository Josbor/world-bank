import React from 'react'

const Bank = ({bank}:any) => {
  
  
  const HandleBank=()=>{
    console.log('hola , Le han dado click a un banco')
  }
    return (
    <div className='bankImage' onClick={HandleBank}>
        <img src={bank.text_logo} alt="" />
    </div>
  )
}

export default Bank