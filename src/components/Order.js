import React from 'react'

function Order({ details }) {
  if (!details) {
    return <h3>Thank you for your order! Coming right up...</h3>
  }

  return (
    <div className='order container'>
      <h2>{details.name}</h2>
      <p>{details.email && `Email: ${details.email}`}</p>
      <p>{details.size && `Size: ${details.size}`}</p>
      <p>{details.toppings1 && `Topping1: ${details.toppings1}`}</p>
      <p>{details.toppings2 && `Topping2: ${details.toppings2}`}</p>
    </div>
  )
}

export default Order
