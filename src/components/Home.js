import React from 'react';


export default function Home() {
    const routeToOrder = () => {

    }

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60'
                alt='man holding a ball of pizza dough'
            />
            <button
                onClick={routeToOrder}
                className='md-button order-button' 
            >Order a Pizza </button>
        </div>
    )

}

