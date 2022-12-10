import React, { useEffect } from 'react'
import { useStoreControl } from '../../hooks/useStoreControl';

const MyBanks = () => {
    const {getLinks,linksList}=useStoreControl()


    useEffect(() => {
        getLinks();
    }, [])
    
    return (
    <div>
        <header>
            <h3>My Banks</h3>
        </header>
        <div className='banks-container'>
            {linksList.length>0?<p>hay links</p>:<p> no hay links</p>}

        </div>

    </div>
  )
}

export default MyBanks