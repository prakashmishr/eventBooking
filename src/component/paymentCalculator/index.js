import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
const PaymentCalculator = ({ transportCharge, distance, money }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [total, setTotal] = useState(0);

  console.log("money",money)

  useEffect(() => {
    distance = 2*distance;
  if (paymentMethod === 'UPI'|| paymentMethod === 'cash' || paymentMethod === 'online' || paymentMethod === 'chque') {
      if (distance <= 30) {
        transportCharge = 1500+money;
      } else {
        transportCharge = 1500 + (distance - 30) * 50 + money;
      }

      const payment = transportCharge ;
      setTotal(payment);
    }
  }, [paymentMethod, transportCharge, distance]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  if(!distance){
    return (<>Please Select Location</>)
  }

  return (
    <div>
      <label htmlFor="payment-method">Payment Method:</label>
      <select id="payment-method" value={paymentMethod} onChange={handlePaymentMethodChange}>
        <option value="">--Please select a payment method--</option>
        <option value="UPI">UPI</option>
        <option value="cash">Cash</option>
        <option value="online">Online</option>
        <option value="chque">Cheque</option>
      </select>
      <br />
      {" "}
      <Button style={{marginTop:"20px"}}  variant="info">Total: {total} Rs.</Button>
      <Button style={{marginTop:"20px", marginLeft:"20px"}}  variant="success">Send Enquiry</Button>
    </div>
  );
};

export default PaymentCalculator;
