import React, {useState, useEffect} from "react";
import { Route, Link } from "react-router-dom";
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import Order from './components/Order'
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema'


const initialFormValues = {
  name: '',
  email: '',
  size: '',
  toppings1: false,
  toppings2: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  email: '',
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



  const getOrders = () => {
    axios.get('https://reqres.in/api/order')
      .then(res => {
        setOrders(res.data)
      })
      .catch(err => console.error(err))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/order')
      .then(res => {
        setOrders([res.data, ...newOrder])
      })
      .catch(err => {
        console.error(err)
      })
    setFormValues(initialFormValues);
  }

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
    const newOrder ={
      name: formValues.name.trim(),
      email: formValues.email.trim(), 
      toppings1: formValues.toppings1,
      toppings2: formValues.toppings2,
      size:formValues.size,
      special: formValues.special.trim(), 
    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])



  return (
    <div className="App">
      <nav>
        <h1 className='home-header'>Let's Make A Pizza</h1>
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
    
          {/* {
            orders.map(order => {
              return (
                <Order key={order.id} details={order.name} />
              )
            })
          } */}
    </div>

  );
};
export default App;
