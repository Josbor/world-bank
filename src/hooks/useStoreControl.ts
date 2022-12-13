import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../app/store"
  
//import { User } from "../models/users.model"
import { getInstitutions, getAllLinks, getInstitutionsDetails, getAccounts, getOwners, getLinkDetails, getTransaccions } from '../api/data';
import { addBankList } from "../features/bankListSlice";
import { addLinks } from "../features/linksSlice";
import { addMyBanks } from "../features/myBanksSlice";


export const useStoreControl = () => {
    //const [banksList,setBanksList]=useState<any>([])
    const listBanks=useSelector((state:RootState)=>state.banks.value)
    const listlinks=useSelector((state:RootState)=>state.links.value)
    const myBanks=useSelector((state:RootState)=>state.myBanks.value)
    const [linksList,setLinkList]=useState<any>([])
    const [bankDetails,setBankDetails]=useState<any>({})
    const dispatch=useDispatch()
    
      
    const getListBanks = async () => {
      const Banks=await getInstitutions();
      //setBanksList(listBanks)
      dispatch(addBankList(Banks))
      console.log(listBanks)
      }

     const getLinks= async  () => {
        const links= await getAllLinks()
        dispatch(addLinks(listlinks))
        setLinkList(links)
        
     }

     const getBankDetails=async(id:number)=>{
    
        if (listBanks&&listBanks.length){
           const  details=await listBanks.find((bank:any)=>bank.id==id)
           console.log(details)
           console.log(listBanks)

           setBankDetails(details);
        }else{
            
          const  details=await getInstitutionsDetails(id);
            setBankDetails(details);
        }
        
        
     }

     const getLinksBanks=async()=>{

        const links= await getAllLinks();
        await dispatch(addLinks(links))
        const banks= await getInstitutions();
        await dispatch(addBankList(banks))
        const newArray= await links.filter((list:any)=>
                banks.some((bank:any)=>list.institution==bank.name)
            ).map((links:any)=>{
                const bank=banks.find((bk:any)=> links.institution==bk.name)
                return {...links,bankDetails:{...bank,linkId:links.id}}
            })
           await dispatch(addMyBanks(newArray))  
        return newArray    
        
     }

     const getAccounInfo= async (link:string,id:number)=>{
        
        const accounts= await getAccounts(link);
        const owners= await getOwners(link);
        const linkDetails= await getLinkDetails(link)
        const bank=await getInstitutionsDetails(id)
        const newArray=await {linkDetails,bank,accounts,owners}
        
        return newArray
     }

    const getListTransaccions=async (link:string,date_From:string,date_to:string,account:string)=>{
        const transactions=await getTransaccions(link,date_From,date_to,account)
        return transactions
    }

   
    return {
        //banksList,
        getListBanks,
        linksList,
        getLinks,
        bankDetails,
        getBankDetails,
        getLinksBanks,
        getAccounInfo,
        getListTransaccions,
        listBanks,
        listlinks,
        myBanks
    }

}