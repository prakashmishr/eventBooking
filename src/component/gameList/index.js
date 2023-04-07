import React, { useState } from 'react';


const GameList = () => {
  const [games, setGames] = useState([
    { id: 1, name: 'Hi Striker', price: 20 },
    { id: 2, name: 'Punch Challenge', price: 15 },
    { id: 3, name: 'Bow & Arrow', price: 25 },
    { id: 4, name: 'Catch Fish', price: 30 },
  ]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (game) => {
    setCart([...cart, game]);
  };

  const handleRemoveFromCart = (game) => {
    const newCart = cart.filter((item) => item.id !== game.id);
    setCart(newCart);
  };

  const handleCheckout = () => {

    // send an enquiry to the backend API
  };

  return (
    <div>
      <h2>Game List</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <span>{game.name}</span>
            <span>{game.price}</span>
            {cart.includes(game) ? (
              <button onClick={() => handleRemoveFromCart(game)}>Remove from cart</button>
            ) : (
              <button onClick={() => handleAddToCart(game)}>Add to cart</button>
            )}
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((game) => (
          <li key={game.id}>
            <span>{game.name}</span>
            <span>{game.price}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default GameList;
