import React, {useState} from 'react'
import {checkToken} from '../../utilities/users-service'

function OrderHistoryPage() {

  const handleCheckToken = async()=>{
    const expDate = await checkToken()
    console.log('expire date history page = ',expDate);
    return expDate
  }

  return (
    <><h1>OrderHistoryPage</h1>
    <br/>
    <button onClick={()=>{
      handleCheckToken()
    }}>Check When My Login Expires</button>
    <br/>
    </>
  )
}

export default OrderHistoryPage