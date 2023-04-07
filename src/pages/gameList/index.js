import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { textAlign } from '@mui/system';




export default function GameList() {

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


  const [games, setGames] = React.useState([
    { id: 1, img:"./img/histriker.jpg", name: 'Hi Striker', price: 20 },
    { id: 2, img:"./img/punch.jpg", name: 'Punch Challenge', price: 15 },
    { id: 3, img:"./img/bowandarrow.jpg" ,name: 'Bow & Arrow', price: 25 },
    { id: 4, img:"./img/catchfish.jpg",  name: 'Catch Fish', price: 30 },
  ]);
  const [cart, setCart] = React.useState([]);

  const handleAddToCart = (game) => {
    setCart([...cart, game]);
  };

  const handleRemoveFromCart = (game) => {
    const newCart = cart.filter((item) => item.id !== game.id);
    setCart(newCart);
  };

  const handleCheckout = () => {
    // perform any necessary validation on the cart items
    // send an enquiry to the backend API
  };

  const navigate = useNavigate();

  const data = { name: 'John', age: 30 }; // data to be sent
  const sendData = () => {
    console.log(cart)

    navigate('/checkout', { state: cart });

  };

  return (
    <div style={{textAlign:"center", marginTop:"30px"}}>
      <h1>Available Game List<ShoppingCartCheckoutIcon onClick={handleOpen} style={{fontSize:"50px", float:"right", color:"blue", marginRight:"70px"}}/></h1>    
    <div style={{display:"flex", marginTop:"80px"}}>
        {games.map((game) => (
          <Card sx={{ display:"flex", margin:"10px", width:"250px" }}>
             <CardActionArea>
             <CardMedia
        sx={{ height: 140 }}
        image={game.img}
        title="green iguana"
      />
             <CardContent>
             <Typography gutterBottom variant="h5" component="div">         
             <li key={game.id}><span>{game.name}</span></li>
            </Typography>
            <span>Price : {game.price}</span>
            <br />
            {cart.includes(game) ? (
              <Button variant="secondary" onClick={() => handleRemoveFromCart(game)}>Remove from cart</Button>
            ) : (
              <Button variant="primary"  onClick={() => handleAddToCart(game)}>Add to cart</Button>
            )}
           </CardContent> </CardActionArea></Card>
        ))}
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h2>Cart</h2>
      <ul>
        {cart.map((game) => (
          <div style={{margin:"5px"}}>
          <li key={game.id}>
            <span>{game.name}</span>{" "}

            <Button variant='info' sx={{marginLeft:"5px"}}>Price :{game.price}</Button>
          </li></div>
        ))}
      </ul>
     
      <Button   varient="primary" onClick={sendData}>Checkout</Button>
        </Box>
      </Modal>
    </div>
  );
}