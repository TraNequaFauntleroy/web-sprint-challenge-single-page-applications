import React, {useState, useEffect} from "react";
import { Route, Link } from "react-router-dom";
import Home from './components/Home'
import PizzaForm from './components/Pizza-Form'
import axios from 'axios';

const App = () => {
  const [pizza, setPizza] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/orders')
      .then(res => {
        setPizza(res.data)
      })
  }, [])

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
        <PizzaForm />
      </Route>
      <Route exact path ='/'>
        <Home />
      </Route>
  
    </div>
  );
};
export default App;
