
import axios from "axios";

const credentials={
    username:'c8747702-c726-4ee6-bebf-f8d0b548b96f',
    password:'ZwFEuYWJ6Lf*#_@b7@Qhqq_CwI8zSBiOicPVuQ@PIfyEEIT@AfHXTA#o-XwpzOGE'
}

 const url= axios.create({
    baseURL:'https://sandbox.belvo.com'
}
)

export  const getInstitutions=async ()=>{
    const response =  await url.get<any>('/api/institutions/',{
        auth:credentials,
        
    
    
    });
    const data=await response.data
    console.log(data.results)
     return data
    
}



export  const getAccounts=async ()=>{
    const response =  await url.post<any>('/api/accounts/',{
      
            link:'35506c4e-6290-4fe6-a16b-076745dee391',
            save_data:true
        },
        {auth:credentials}
    );
    const result=await response.data
    console.log(result)
     return result
    
}



export  const getTransaccions=async ()=>{
    const response =  await url.post<any>('/api/accounts/',{
      
            link:'35506c4e-6290-4fe6-a16b-076745dee391',
            save_data:true
        },
        {auth:credentials}
    );
    const result=await response.data
    console.log(result)
     return result
    
}