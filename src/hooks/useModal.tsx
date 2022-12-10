import { Modal } from '@mui/material'
import  { useState } from 'react'



const useModal = (Component:any=null) => {
  const [modal,setModal]=useState(false)
  
  const openModal=()=>{
    setModal(true)
  }
  const handleClose=()=>{
    setModal(false)
  }

 const ModalComponent=()=>{
    return(
        <>

        <Modal
            open={modal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
          {Component? <><Component/></>: <p>missing a component</p>}
         
        </Modal>
          </>
        )


 }
  
  return [openModal,ModalComponent]
    
    
  
}

export default useModal
