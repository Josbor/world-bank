import React, { useId } from 'react'
import Account from '../../components/account/Account'

const AccountContainer = ({list}:any) => {
    
    return (
    <>
    {list.length>0&&list.map((account:any)=>
        <Account key={useId()} account={account}/>
    )}
    </>
  )
}

export default AccountContainer