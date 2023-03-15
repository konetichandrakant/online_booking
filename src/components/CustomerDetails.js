import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { enums } from '../enums';
import '../views/CustomerDetails.css';

function CustomerDetails() {
  let Name = useRef('');
  let PhoneNumber = useRef('');
  let Email = useRef('');
  let Address = useRef('');

  const [validName, setValidName] = useState('');
  const [validNumber, setValidNumber] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [validAddress, setValidAddress] = useState('');

  const dispatch = useDispatch();

  const namePattern = /^[[a-zA-Z]{6,16}$/;
  const numberPattern = /^[0-9]{10}$/;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  const nextPage = () => {
    let valid = true;

    let name = Name.current.value;
    let phoneNumber = PhoneNumber.current.value;
    let email = Email.current.value;
    let address = Address.current.value;

    if (name.length === 0) {
      setValidName('* Name Field is Empty*');
      valid = false;
    }
    else if (!name.match(namePattern)) {
      setValidName('** Invalid Name **');
      valid = false;
    }
    else {
      setValidName('');
    }
    if (phoneNumber.length === 0) {
      setValidName('* Number Field is Empty*');
      valid = false;
    }
    else if (!phoneNumber.match(numberPattern)) {
      setValidNumber('** Invalid Number **');
      valid = false;
    }
    else {
      setValidNumber('');
    }
    if (email.length === 0) {
      setValidEmail('* Email field is Empty *');
      valid = false;
    }
    else if (!email.match(emailPattern)) {
      setValidEmail('* Invalid Email *');
      valid = false;
    }
    else {
      setValidEmail('');
    }
    if (address.length === 0) {
      setValidAddress('* Address Field is Empty *');
      valid = false;
    }
    else if (address.length > 200) {
      setValidAddress('* Address Length Exceeded *');
      valid = false;
    }
    else {
      setValidAddress('');
    }

    if (valid)
      dispatch({ type: '', payload: enums.PAYMENT });
  }

  return (
    <div>
      <div className='customer-section'>

        <h3>Customer Details</h3>

        <div className='customer-section-validation'>
          <div className='customer-section-fields'>
            <label for='name'>Name: </label>
            <input name='name' type='text' placeholder='John'
              className='customer-input' ref={Name} />
          </div>
          {
            validName !== '' &&
            (<div id='name'>
              {validName}
            </div>)
          }
        </div>

        <div className='customer-section-validation'>
          <div className='customer-section-fields'>
            <label for='number'>Number: </label>
            <input name='number' type='text' placeholder='9090909090'
              className='customer-input' ref={PhoneNumber} />
          </div>
          {
            validNumber !== '' &&
            (<div id='number'>
              {validNumber}
            </div>)
          }
        </div>

        <div>
          <div className='customer-section-fields'>
            <label for='email'>Email: </label>
            <input name='email' type='email' placeholder='John@123'
              className='customer-input' ref={Email} />
          </div>
          {
            validEmail !== '' &&
            (<div id='email'>
              {validEmail}
            </div>)
          }
        </div>

        <div>
          <div className='customer-section-fields'>
            <label for='address'>Address: </label>
            <input name='address' type='address'
              placeholder='x/y abc towers, USA' className='customer-input'
              ref={Address} />
          </div>
          {
            validAddress !== '' &&
            (<div id='email'>
              {validAddress}
            </div>)
          }
        </div>

      </div>
      <div id='order-next'>
        <button id='order-next-button' onClick={nextPage}>NEXT</button>
      </div>
    </div>
  )
}

export default CustomerDetails;