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

     const getLinksBanks=async()=>{

        const links= await getAllLinks();
        const banks= await getInstitutions();
        const newArray= await links.filter((list:any)=>
                banks.some((bank:any)=>list.institution==bank.name)
            ).map((links:any)=>{
                const {text_logo,id,name}=banks.find((bk:any)=> links.institution==bk.name)
                return {...links,bankDetails:{id,text_logo,name}}
            })
        return newArray    
        
     }

    
   
    return {
        banksList,
        getListBanks,
        linksList,
        getLinks,
        bankDetails,
        getBankDetails,
        getLinksBanks
    }

}