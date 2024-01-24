import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetTrademanByIdQuery } from '../store/storeApi'

const SingleProfile = () => {
    const {id} = useParams()
    const { data, isLoading } = useGetTrademanByIdQuery(id)
    console.log(data)
  return (
    <>
      <h1>s page {id}</h1>
    </>
  )
}

export default SingleProfile
