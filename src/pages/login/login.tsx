import React from 'react'
import { useParams } from 'react-router-dom'

const login = () => {
    const { id } = useParams()
    return (
    <div>login</div>
  )
}

export default login