import React, { useEffect } from 'react'
import Header from '../../components/Header';
import { useStoreControl } from '../../hooks/useStoreControl';

const MyBanks = () => {
    const {getLinks,linksList}=useStoreControl()


    useEffect(() => {
        getLinks();
    }, [])
    
    return (
    <div>
        <Header header={{tittle:'Mis Bancos',help:"Ingrese se sus credenciales para ingresar al banco"}}/>
        <div className='banks-container'>
            {linksList.length>0?<p>hay links</p>:<p> no hay links</p>}

        </div>

    </div>
  )
}

export default MyBanks