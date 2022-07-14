import React from 'react'
import Navbar from './Navbar/Navbar'
// We Import Chakra styles from @Chakra-ui/react before Desstructuring it in a component 
import {Box} from '@chakra-ui/react';
import Buttons from './Test/Buttons';

const ChildrenProps = ({children}) => {
  return (
    // Instead of using <div>, In Chakra we use <Box>
    <Box
    width={'100%'} 
    border={'2px solid red'}
    >
        <Navbar/>
        <div>{children}</div>
        <p>Hey! I  am Under children props </p>
        <p>Hey! I  am Under children props </p>
      
       <Buttons
       width={'100px'}
       height={'50px'}
       borderRadius={'10px'}
      Text={'Get Started'}
      onClick={() =>{
        alert("Hey What's Good?");
      }}
       />
       <Buttons
       width={'100px'}
       height={'50px'}
       borderRadius={'10px'}
      Text={'Click Me'}
      onClick={() =>{
        alert("Welcome to Collexy Page");
      }}
       />
</Box>
  )
}

export default ChildrenProps;