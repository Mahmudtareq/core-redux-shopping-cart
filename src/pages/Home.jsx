import { Container } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCards from '../components/ProductCards/ProductCards';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const state = useSelector((state) => state);
  console.log(state);
  // console.log(products);
  return (
    <Container className=" max-w-[1200px]  mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 my-9">
      {products &&
        products.map((product) => (
          <ProductCards product={product} key={product._id} />
        ))}
    </Container>
  );
};

export default Home;
