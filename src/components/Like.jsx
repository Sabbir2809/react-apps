import React, { useState } from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import Button from './Button';

const Like = () => {
  const [react, setReact] = useState(true);

  const toggle = () => {
    setReact(!react);
    alert('❤️');
  };

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'Tabbu',
    },
  });

  const handleGame = () => {
    setGame({
      ...game,
      player: { name: 'Maru' },
    });
  };

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  });

  const handlePizza = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, ' Chess'],
    });
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 3 },
    ],
  });

  const handleCart = () => {
    setCart({
      ...cart,
      items: [
        ...cart.items,
        cart.items.map((item) => (item.id === 1 ? { ...item, quantity: item.quantity++ } : item)),
      ],
    });
  };

  return (
    <section>
      <div className='container'>
        {react ? (
          <FcLikePlaceholder onClick={toggle} size={40} />
        ) : (
          <FcLike onClick={toggle} color='blue' size={40} />
        )}
      </div>

      <div className='container'>
        <h1 className='text-success'>{game.player.name}</h1>
        <Button onClick={handleGame} color='success'>
          Game
        </Button>

        <h2 className='text-warning'>{pizza.toppings}</h2>
        <Button onClick={handlePizza} color='warning'>
          Pizza
        </Button>

        <h3 className='text-dark'>{cart.items[0].quantity}</h3>
        <Button onClick={handleCart} color='dark'>
          Add to Cart
        </Button>
      </div>
    </section>
  );
};

export default Like;
