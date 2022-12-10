import { useState } from "react"
//import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../app/store"
//import { addSelectedUser } from '../features/bankSelectionSlice';
//import { User } from "../models/users.model"
import { getInstitutions, getAllLinks } from '../api/data';


export const useStoreControl = () => {
    const [banksList,setBanksList]=useState<any>([])
    const [linksList,setLinkList]=useState<any>([])
  
      const getListBanks = async () => {
      const listBanks=await getInstitutions();
      setBanksList(listBanks)
      console.log(banksList)
      }

     const getLinks= async  () => {
        const links= await getAllLinks()
        setBanksList(links)
        
     }
   
    return {
        banksList,
        getListBanks,
        linksList,
        getLinks
        
    }

}