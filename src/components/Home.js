import React from 'react';
import {Link } from 'react-router-dom'



export default function Home() {
    const routeToOrder = () => {

    }

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
                alt='pizza with toppings'
            />
            <Link to='/pizza'>
            <button
                    onClick={routeToOrder}
                    className='md-button order-button' 
                >Order a Pizza 
            </button>
            </Link>
        </div>
    )

}

