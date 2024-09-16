import React, {useState, useEffect} from "react";
import { Route, Link } from "react-router-dom";
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import Order from './components/Order'
import './index.css'
import * as yup from 'yup';
import schema from './validation/formSchema'


const initialFormValues = {
  name: '',
  size: '',
  toppings1: false,
  toppings2: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  toppings1: '',
  toppings2: '',
  size: '',
  special: ''
}
const initialOrder = []
const initialDisabled = true;


const App = () => {
  const [orders, setOrders] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      toppings1: ['beef', 'chicken', 'sausage', 'pepperoni'].filter(topping => !!formValues[topping]),
      toppings2: ['spinach', 'olives', 'red onions', 'tomatoes'].filter(topping => !!formValues[topping]),
      size:formValues.size,
      special: formValues.special.trim(), 
    }
    setOrders([...orders, newOrder ]);
    console.log(orders)
  }


  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])
 
  return (
    <div className="App">
      <nav>
        <h1 className='home-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Pizza</Link>
        </div>
      </nav>
      <Route path={'/pizza/'}>
        <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      {
       orders ? 
        Object.keys(orders).map((key, index) => {
          return (
            <Order key={index} details={orders[key]} />
          )
        }) : null
      }
    </div>

  );
};

export default App;

