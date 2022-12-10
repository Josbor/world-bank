import { useState } from "react"
//import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../app/store"
//import { addSelectedUser } from '../features/bankSelectionSlice';
import { addUsers } from "../features/usersSlice"
//import { User } from "../models/users.model"
import { getInstitutions } from '../api/data';


export const useStoreControl = () => {
    const [banksList,setBanksList]=useState<any>([])
    //const dispatch=useDispatch()
    //const userList=useSelector((state:RootState)=>state.users.value)
   // const selectedUser=useSelector((state:RootState)=>state.selectedUser.value)
  
      const getListBanks = async () => {
      const listBanks=await getInstitutions();
      setBanksList(listBanks)
      console.log(banksList)
      }
   
    return {
        banksList,
        getListBanks
        
    }

}