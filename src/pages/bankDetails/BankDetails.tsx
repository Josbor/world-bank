import React from 'react'
import { useParams } from 'react-router-dom'

const BankDetails = () => {
    const { id } = useParams()
    return (
    <div>BankDetails</div>
  )
}

export default BankDetails