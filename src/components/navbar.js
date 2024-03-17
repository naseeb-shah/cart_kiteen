import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Link,
  Spacer,
  IconButton,
  Box,
  HStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Heading,
} from '@chakra-ui/react';



const NavBar = () => {
 


 
  return (
    <Flex p={4} bg="teal.500" color="white" mb={50} justifyContent={'center'}>
      
<Heading> Welcome at  GameZone</Heading>
    </Flex>
  );
};

export default NavBar;
