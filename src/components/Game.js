
import { useDispatch,useSelector } from 'react-redux';
import Card from './card';
import { Button, HStack,Text } from '@chakra-ui/react';
import NavBar from './navbar';
import { useState } from 'react';

import {Exploding,Shuffle,Defuse,Cat}  from "../redux/action"
;

export const Game=()=>{
    const store=useSelector((state)=>state.cards)
 const loss=useSelector((state)=>state.loss)
 const win=useSelector((state)=>state.win)
 

const dispatch= useDispatch()
  const handleClick = (x,id) => {
    
    
    setTimeout(() => {
      if(x=="EXPLO"){
        dispatch(Exploding(id))
      }else if(x=="CAT"){
        dispatch(Cat(id))
      }else if(x=="DEFUSE"){
        dispatch(Defuse(id))
      }else if(x=='SHUFFLE'){
        dispatch(Shuffle(id))
      }
    }, 800);
   
    
  };

 
    return( 

        <>
        <NavBar />
        <Button alignSelf="center" textAlign="center" display="block" mx="auto" onClick={()=>dispatch(Shuffle(0)) } mb={20}>
  RESTART
</Button>

       { win?
             <Text
             textAlign="center"
             fontSize="200"
             fontWeight="bold"
             backgroundImage="linear-gradient(to right, #87CEEB, #feb47b)"
             color="transparent"
             bgClip="text"
           >
            YOU WIN
           </Text>:null
        }
        { loss?
             <Text
             textAlign="center"
             fontSize="200"
             fontWeight="bold"
             backgroundImage="linear-gradient(to right, #87CEEB, #feb47b)"
             color="transparent"
             bgClip="text"
           >
            YOU LOSS
           </Text>:null
        }
            <HStack alignItems={'center'} justifyContent={'center'}>
        
        {
store.map((e,index)=><Card value={e.name.toUpperCase()} key={e.name+index+e.show+e.id} id={e.id}handleClick={handleClick} show={false} icon={e.icon} />)

}
</HStack>

</>
        )
    


}