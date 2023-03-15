import './App.css';
import { enums } from './enums';
import OrderSection from './components/OrderSection.js';
import CustomerDetails from './components/CustomerDetails.js';
import Payment from './components/Payment.js';
import { useSelector } from 'react-redux';

export default function App() {
  const page = useSelector(state => state.page);

  return (
    <div className="App">
      {
        ((page === '') || (page === enums.ORDER_SECTION)) &&
        (<OrderSection />)
      }

      {
        page === enums.CUSTOMER_DETAILS &&
        (<CustomerDetails />)
      }

      {
        page === enums.PAYMENT &&
        (<Payment />)
      }

      {
        page === enums.PAYMENT_SUCCESSFUL &&
        (
          <h1>
            SUCCESSFUL PAYMENT
          </h1>
        )
      }

      {
        page === enums.PAYMENT_FAILED &&
        (
          <h1>
            UNSUCCESSFUL PAYMENT
          </h1>
        )
      }
    </div>
  );
}
