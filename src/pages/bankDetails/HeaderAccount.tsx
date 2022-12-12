import React, { useId } from 'react'

const HeaderAccount = ({owners}:any) => {
  
    return (
        <>
        {owners&&owners.map((owner:any)=>
            <div key={useId()} className='header-account'>
            <h2>{owner.display_name}</h2>
            {/* <p> Titular de Cuenta</p> */}
        </div>
        )}
        </>
    )
}

export default HeaderAccount