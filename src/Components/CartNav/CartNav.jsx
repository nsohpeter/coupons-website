import React from 'react'
import './CartNav.css'
import { useSelector } from 'react-redux'

const CartNav = () => {

   const  amount = useSelector((store) => store.Cart.amount)
  return (
    
      <div className='Cart-nav-center'>
        <h3>YOUR CART</h3>
        <div className='Cart-nav-container'>
             <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>
          <div className='Cart-amount-container'>
            <p className='Cart-total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    
  )
}

export default CartNav
