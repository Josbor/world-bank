import axios from "axios";

const credentials = {
  username: "c8747702-c726-4ee6-bebf-f8d0b548b96f",
  password: "ZwFEuYWJ6Lf*#_@b7@Qhqq_CwI8zSBiOicPVuQ@PIfyEEIT@AfHXTA#o-XwpzOGE",
};

const url = axios.create({
  baseURL: "https://sandbox.belvo.com",
});

//OBTIENE LAS INSTITUCIONES
export const getInstitutions = async () => {
  const response = await url.get<any>("/api/institutions/", {
    auth: credentials,
  });
  const data = await response.data.results;
  const filterData=data.filter((bank:any)=>bank.type=='bank'&&bank.text_logo) 
  return filterData;
};

//DETAILS FROM A INSTITUTION

export const getInstitutionsDetails = async (id:number) => {
  const response = await url.get<any>(`api/institutions/${id}/`, {
    auth: credentials,
  });
  
  const data = await response.data;
 
  return data;
};



// GENERA UN LINK
export const generateLink = async (
  institution: string,
  username: string,
  password: string
) => {
  const response = await url.post<any>(
    "/api/links/",
    {
      institution,
      username,
      password,
    },
    { auth: credentials }
  );
  const result = await response.data;
  console.log(result);
  return result;
};

export const destroyLink = async (
    link:string
  ) => {
    const response = await url.delete<any>(
      `/api/links/${link}`,
      { auth: credentials }
    );
    const result = await response.data;
    console.log(!result&&'borrado con exito');
    return result;
  };

  
export const getAllLinks = async (
  ) => {
    const response = await url.get<any>(
      `/api/links/`,
      { auth: credentials }
    );
    const result = await response.data.results;
    console.log(result);
    return result;
  };

export const getTransaccions = async (link:string,date_from:string,date_to:string,account:string) => {
  const response = await url.post<any>(
    "/api/transactions/",
    {
      link,
      date_from,
      date_to,
      account,
      save_data: true,
    }, 
    { auth: credentials }
  ).catch(e=>console.error(e));
  const result:any = await response?.data;
  console.log(result);
  return result;
};


// ACCOUNTS 
export const getAccounts = async (link:string) => {
  const response = await url.post<any>(
    "/api/accounts/",
    {
      link,
      save_data: true,
    },
    { auth: credentials }
  );
  const result = await response.data;
 
  return result;
};

//OWNERS

export const getOwners = async (link:string) => {
  const response = await url.post<any>(
    "/api/owners/",
    {
      link,
      save_data: true,
    },
    { auth: credentials }
  );
  const result = await response.data;

  return result;
};

export const getLinkDetails = async (link:string) => {
    const response = await url.get<any>(
      `/api/links/${link}`,
      { auth: credentials }
    );
    const result = await response.data;
    console.log(result);
    return result;
  };


  export const getAccountDetails = async (id:string) => {
    const response = await url.get<any>(
      `/api/accounts/${id}`,
      { auth: credentials }
    );
    const result = await response.data;
    console.log(result);
    return result;
  };


