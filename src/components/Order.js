import React from 'react'

function Order({ details }) {
  if (!details) {
    return <h3>Thank you for your order! Coming right up...</h3>
  }

  return (
    <div className='order container'>
      <h2>{details.name}</h2>
      <p>Size: {details.size}</p>
      {
        !!details.topping1 && !!details.toppings1.length ?
        <div>
          Meat Topping(s):
          <ul>
            {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
          </ul>
        </div> : null
      }
      {
        !!details.topping2 && !!details.toppings2.length &&
        <div>
          Veggie Topping(s):
          <ul>
            {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
          </ul>
        </div>
      }
      <p>Special Instructions: {details.special}</p>
    </div>
  )
}

export default Order
