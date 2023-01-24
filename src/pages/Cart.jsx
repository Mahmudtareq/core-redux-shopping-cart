import { Container } from '@mantine/core';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCards from '../components/ProductCards/ProductCards';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container className="max-w-[1200px] my-9 lg:grid-cols-4 grid gap-4 md:grid-cols-2">
      {cart
        .sort((a, b) => a._id - b._id)
        .map((product) => (
          <ProductCards product={product} key={product._id} />
        ))}
    </Container>
  );
};

export default Cart;
