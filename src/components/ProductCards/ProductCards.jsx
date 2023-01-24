import {
  ActionIcon,
  Box,
  Button,
  Group,
  Image,
  Indicator,
  Text,
} from '@mantine/core';
import {
  IconGitBranchDeleted,
  IconHeartPlus,
  IconShoppingCart,
} from '@tabler/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  addToCard,
  removeFromCart,
} from '../../redux/actionCreators/productActions';

const ProductCards = ({ product }) => {
  // console.log(product);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { image, price, rating, model, quantity } = product;
  return (
    <Box
      component="div"
      className=" m-2 w-full max-w-[240px]  rounded-lg bg-white px-6 py-5 shadow-md  dark:border-gray-700 dark:bg-gray-800"
    >
      {' '}
      {pathname.includes('cart') && (
        <Group position="right" spacing="xl" className="mt-8">
          <Indicator
            label={quantity}
            inline
            color="teal"
            radius="md"
            size={27}
            withBorder
          ></Indicator>
        </Group>
      )}
      <Box>
        <Image src={image} className="m-auto" fit="contain" />
      </Box>
      <Box>
        <Group component="div">
          <span className="text-sm text-gray-600 ">computer</span>
          <Text
            component="a"
            className="justify-center text-xl font-semibold  text-gray-900 dark:text-white"
          >
            {model}
          </Text>
        </Group>
        <Group className="my-4" position="apart" spacing="md" grow>
          {pathname.includes('cart') && (
            <Button
              variant="gradient"
              gradient={{ from: 'orange', to: 'red' }}
              leftIcon={
                <IconGitBranchDeleted size={14} className="text-[#000]" />
              }
              className="font-md text-[#000000] "
              onClick={() => dispatch(removeFromCart(product))}
            >
              Remove
            </Button>
          )}
          {!pathname.includes('cart') && (
            <Button
              leftIcon={<IconShoppingCart size={14} className="text-[#000]" />}
              className="font-md text-[#000000]"
              onClick={() => dispatch(addToCard(product))}
            >
              Add
            </Button>
          )}
          {!pathname.includes('cart') && (
            <ActionIcon
              sx={{
                '&[data-disabled]': { opacity: 0.4 },
                '&[data-loading]': { backgroundColor: 'red' },
              }}
              variant="transparent"
            >
              <IconHeartPlus size={24} />
            </ActionIcon>
          )}
        </Group>
      </Box>
    </Box>
  );
};

export default ProductCards;
