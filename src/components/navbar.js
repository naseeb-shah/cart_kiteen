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
import { useAuth } from '../auth';



const NavBar = () => {
 
const{user}=useAuth()

 
  return (
    <Flex p={4} bg="teal.500" color="white" mb={30} justifyContent={'center'}>
      
<Heading> Welcome {user?user.name:'at  GameZone'}</Heading>
    </Flex>
  );
};

export default NavBar;
