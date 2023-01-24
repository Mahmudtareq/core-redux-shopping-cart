import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  Header,
  Title,
} from '@mantine/core';
import { IconHeartPlus, IconShoppingCart } from '@tabler/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <Header className=" h-16 relative">
      <Container className="flex justify-between items-center ">
        <Group>
          <Title order={4}>Mantine</Title>
        </Group>
        <Group>
          <Box className="flex items-center h-[100%] space-x-5 ">
            <Link to="/" className="text-md no-underline">
              Home
            </Link>
            <Link to="/about" className="text-md no-underline">
              About
            </Link>
            <Link to="/order" className="text-md no-underline">
              Top Order
            </Link>
          </Box>
        </Group>
        <Group>
          <Box className="flex items-center space-x-5 ">
            <ActionIcon component="a">
              <IconHeartPlus size={25} />
            </ActionIcon>
            <ActionIcon component={Link} to="/cart">
              <IconShoppingCart size={25} />
            </ActionIcon>
          </Box>
        </Group>
        <Group spacing="sm">
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </Group>
      </Container>
    </Header>
  );
};

export default TopHeader;
