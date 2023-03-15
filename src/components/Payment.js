import React from 'react'
import { useDispatch } from 'react-redux';
import { enums } from '../enums';
import '../views/Payment.css';

function Payment() {
  const dispatch = useDispatch();

  const nextPage = () => {
    dispatch({ type: '', payload: enums.PAYMENT_SUCCESSFUL });
  }

  const cancelPage = () => {
    dispatch({ type: '', payload: enums.PAYMENT_FAILED });
  }

  return (
    <div className='payment-section'>
      <h3>Amount to be paid: 400rs</h3>

      <div>
        <div className='payment-section-fields'>
          <button id='payment-pay-button' onClick={nextPage}>
            PAY
          </button>
        </div>

        <div className='payment-section-fields'>
          <button id='payment-cancel-button' onClick={cancelPage}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  )
}

export default Payment