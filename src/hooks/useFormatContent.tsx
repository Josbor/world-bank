import React, { useState } from 'react'
import {  } from '../features/bankListSlice';

const useFormatContent = (content:any,exception:any[]) => {
  // const userDetails = Object.keys(content).map(e => {
  //   let newobj = { tittle: e, content: content[e] }
  //   return newobj
  // }).filter(e=> typeof e.content!=='object')


 const objectTransform=(obj:any)=>{
  const newObject= Object.keys(obj).map(e => {
    let newobj = { tittle: e, content: content[e] }
    return newobj
  })
  return newObject.filter(e=>!(exception.some(p=>p===e.tittle)))
}

 const details=objectTransform(content)
 console.log(details)
  
  const ContentDetails =()=>{

    return(
      <>
      {details.map(({tittle,content}:any,index:any)=>{
        if (typeof content!=='object'){
          return (
          <div className='flex-col2' key={index}>
            <p className='bold'>{tittle}</p>
            <p>{content}</p>
           </div>
           )
        }  
        }
        )}
    </>
    )
  }


  return  ContentDetails
  
}

export default useFormatContent
