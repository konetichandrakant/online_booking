import React from 'react'
import { useDispatch } from 'react-redux'
import { enums } from '../enums';
import '../views/OrderSection.css';

function OrderSection() {
  const dispatch = useDispatch();
  const date = new Date();

  const nextPage = () => {
    dispatch({ type: "", payload: enums.CUSTOMER_DETAILS });
  }

  return (
    <div className='order-section-all'>
      <div className='order-section'>
        <div className='order-section-fields'>
          <span>Product Name: </span>
          <span>Chicken Biryani</span>
        </div>

        <div className='order-section-fields'>
          <span>Price: </span>
          <span>400rs</span>
        </div>

        <div className='order-section-fields'>
          <span>Order ID: </span>
          <span>200013145</span>
        </div>

        <div className='order-section-fields'>
          <span>Date: </span>
          <span>{date.toDateString()}</span>
        </div>
      </div>
      <div id='order-next'>
        <button id='order-next-button' onClick={nextPage}>NEXT</button>
      </div>
    </div>
  )
}

export default OrderSection;