import { Box, Container } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import ProductCards from '../ProductCards/ProductCards';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Box>
      <Container className="grid grid-cols-3 gap-4 my-9">
        {products &&
          products.map((product) => (
            <ProductCards key={product._id} product={product} />
          ))}
      </Container>
    </Box>
  );
};

export default AllProducts;
