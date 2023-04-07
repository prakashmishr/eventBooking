import React, { useState } from 'react';
import EventDuration from '../../component/eventDuration';
import PaymentCalculator from '../../component/paymentCalculator';
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from '@mui/material/Modal';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';



import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { useLocation } from 'react-router-dom';

export default function CheckoutPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [setupDate, setSetupDate] = useState('');
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [transportCharge, setTransportCharge] = useState('');
  const [distance, setDistance] = useState('');
  const [cartItems, setCartItems] = useState([]);


  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSetupDateChange = (event) => {
    setSetupDate(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleTransportChargeChange = (event) => {
    setTransportCharge(event.target.value);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic here, such as sending data to a server
  };


  const loca = useLocation();
  const receivedData = loca.state; // received data
  
  console.log(receivedData)
  var money = 0;
 receivedData.forEach((data)=>{
  const {price} = data;
  money += price
  console.log(money)
 })

  return (
    <div style={{textAlign:'center', padding:'30px'}}>
      <h1><ShoppingCartCheckoutIcon style={{fontSize:"50px"}}/>Checkout Page</h1>
      <form onSubmit={handleSubmit}>
        <Table striped bordered hover size="sm" >
          <tbody>
          <tr>
            <td>    <div>
          <label htmlFor="startDate">Event Start Date:</label>
          <input
            type="datetime-local"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            required
          />
        </div></td>
         
            <td>
            <div>
          <label htmlFor="endDate">Event End Date:</label>
          <input
            type="datetime-local"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            required
          />
        </div></td>
          </tr>
          <tr>
            <td> <div>
          <label htmlFor="setupDate">Setup Date:</label>
          <input
            type="datetime-local"
            id="setupDate"
            name="setupDate"
            value={setupDate}
            onChange={handleSetupDateChange}
            required
          />
        </div></td>
       
             <td>
        <div>
          <label htmlFor="location">Event Location:</label>
          <select id="location" name="location" value={location} onChange={handleLocationChange} required>
            <option value="">--Select a location--</option>
            <option value="10">Baghajatin, Kolkata, WB</option>
            <option value="20">Garia, Kolkata, WB</option>
            <option value="15">Sealdaha, Kolkata, WB</option>
            <option value="25">Jadavpur, Kolkata, WB</option>
          </select>
        </div></td> 
          </tr>
          <tr>
            <td> <EventDuration startDate={startDate} endDate={endDate} /></td>
          <td> <PaymentCalculator transportCharge={1500} distance={location} money={money} /></td></tr>
           
          </tbody>
            </Table>  
            </form>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h6>Total Bill (including Transport Charge)</h6>
        <ul>
        {receivedData.map((game) => (
          <div style={{margin:"5px"}}>
          <li key={game.id}>
            <span>{game.name}</span>{" "}

            <span style={{marginLeft:"5px", backgroundColor:"#262A56", color:"white"}}>Price :{game.price}</span>
          </li></div>
        ))}
      </ul>
     <span> <PaymentCalculator transportCharge={1500} distance={location} money={money} /></span>
        </Box>
      </Modal>
      <Button   varient="primary" onClick={handleOpen}>Checkout</Button>

</div>
  )

}