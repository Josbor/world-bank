import { useState } from "react"
//import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../app/store"
//import { addSelectedUser } from '../features/bankSelectionSlice';
//import { User } from "../models/users.model"
import { getInstitutions, getAllLinks, getInstitutionsDetails } from '../api/data';


export const useStoreControl = () => {
    const [banksList,setBanksList]=useState<any>([])
    const [linksList,setLinkList]=useState<any>([])
    const [bankDetails,setBankDetails]=useState<any>({})
  
      const getListBanks = async () => {
      const listBanks=await getInstitutions();
      setBanksList(listBanks)
      console.log(banksList)
      }

     const getLinks= async  () => {
        const links= await getAllLinks()
        setLinkList(links)
        
     }

     const getBankDetails=async(id:number)=>{
        const details=await getInstitutionsDetails(id);
        
        setBankDetails(details);
     }

    
   
    return {
        banksList,
        getListBanks,
        linksList,
        getLinks,
        bankDetails,
        getBankDetails
    }

}