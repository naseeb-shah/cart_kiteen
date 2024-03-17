import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';



const Card = ({ value, id, icon,show,handleClick }) => {
  const [showq,setShowq]=useState(false)
  const handle=()=>{
     setShowq(!showq)
     handleClick(value,id)
  }
  return (
    <Box
      bg="white"
      boxShadow="md"
      borderRadius="md"
      p={4}
      w="100px"
      h="150px"
      textAlign="center"
      position="relative"
      borderWidth={2}
      borderColor={'blue'}
      backgroundImage={show?'linear-gradient(to bottom right,#FFFFFF,##FFFF00':'linear-gradient(to bottom right, #87CEEB, #feb47b)'}
      onClick={() => handle(value)}
    >
      <AnimatePresence>
        {showq && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', top: 2, left: 2 }}
          >
            <Text fontSize="25" fontWeight="bold" color={'red'}>
            {icon}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showq && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', top: 55, transform: 'translateX(-50%)' }}
          >
             <Text
              textAlign="center"
              fontSize="lg"
              fontWeight="bold"
              backgroundImage="linear-gradient(to right, blue, red)"
              color="transparent"
              bgClip="text"
            >{value}</Text>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showq && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', bottom: 2, right: 2 }}
          >
            <Text fontSize="25">{icon}</Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Card;
