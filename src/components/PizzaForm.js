import React from 'react'

export default function PizzaForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = event => {
    event.preventDefault()
    submit()
  }

  const onChange = event => {
    const { name, values, checked, type } = event.target
    const valueToUse = type === 'checkbox' ? checked : values;
    change(name, valueToUse)
  }
  return (
    <form className='pizza-form' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Place Your Order</h2>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
        </div>

        <div className='form-group inputs'>
          <label>Name:
            <input 
            id='name-input'
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
            />
          </label>

          <label>Email:
            <input 
            id='email-input'
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
            />
          </label>

          <label>Size:
            <select
            id='size-dropdown'
            value={values.size}
            onChange={onChange}
            name='name'>
              <option value=''>- Select an option -</option>
              <option value='personal'>Personal</option>
              <option value='10in'>10 Inch</option>
              <option value='12in'>12 Inch</option>
              <option value='party'>Party</option>
            </select>
          </label>

          <div className='form-group checkboxes toppings1'>
            <h4>Meat Toppings</h4>
            <label>Beef
              <input
                type='checkbox'
                name='beef'
                checked={values.beef}
                onChange={onChange}
              />
            </label>

            <label>Chicken
              <input
                type='checkbox'
                name='chicken'
                checked={values.chicken}
                onChange={onChange}
              />
            </label>

            <label>Sausage
              <input
                type='checkbox'
                name='sausage'
                checked={values.sausage}
                onChange={onChange}
              />
            </label>

            <label>Pepperoni
              <input
                type='checkbox'
                name='pepperoni'
                checked={values.pepperoni}
                onChange={onChange}
              />
            </label>
          </div>

          <div className='form-group checkboxes toppings2'>
              <h4>Veggie Toppings</h4>
              <label>Spinach
                <input
                  type='checkbox'
                  name='spianch'
                  checked={values.spinach}
                  onChange={onChange}
                />
              </label>

              <label>Olives
                <input
                  type='checkbox'
                  name='olives'
                  checked={values.olives}
                  onChange={onChange}
                />
              </label>

              <label>Red Onions
                <input
                  type='checkbox'
                  name='redOnions'
                  checked={values.redOnions}
                  onChange={onChange}
                />
              </label>
              <label>Tomatoes
                <input
                  type='checkbox'
                  name='tomatoes'
                  checked={values.tomatoes}
                  onChange={onChange}
                />
              </label>

              <label>Special Instructions:
                <input 
                id='special-text'
                value={values.special}
                onChange={onChange}
                name='special'
                type='text'
                />
              </label>
            </div>

            <button id='order-button' disabled={disabled}>Order Pizza</button>
        
      </div>
    </form>
  )

}
