import React from 'react'
import './Navbar.css'
import {Flex, Heading, Link as ChakraLink, HStack} from '@chakra-ui/react';

const Navbar = () => {
  return (
// Instead of Css Styling <div className='nav-container' 
// @External Link == | For Chakra we write all the styles inside the <Flex ....>
    // .nav-container {
//   border: 2px solid black; | For Chakra we write  border={'2px solid black'}
//   display:flex; | For Chakra we wrap all Child elements <Flex></Flex>
//   align-items: center; | For Chakra we write alignItems={'center'}
//   justify-content: space-between; | For Chakra we write justifyContent={'space-between'}
// }
// For In-line Styling Below
// style={{fontSize: '16px', | For Chakra we write  fontSize={'16px'}
// backgroundColor: 'silver'}} | For Chakra we write  backgroundColor={'silver'}
//>

<Flex 
alignItems={'center'}
 justifyContent={'space-between'}
//  border={'2px solid black'}
 backgroundColor={'silver'}
 fontSize={'16px'}
 mb={'50px'}
 marginTop={'50px'}
 > 
 
 {/* Instead of using <h1 
 className='nav-heading'>
  Learn to Earn
  </h1> */}
 <Heading 
 fontSize={'20px'}
 paddingLeft={'10px'}
 fontStyle={'italic'}
 color={'facebook.700'}>
   Learn to Earn 
   </Heading>


 {/* <section Instead of -- className='navLinks'> 
 | For Chakra we write only <section> */}
 {/* <section> */}
 {/* In place of <section> we use HStack,
 For HStack flex Direction is set to Row, 
 With HStack, we don't need to add padding:10px to space links from eachother*/}
 <HStack
 w={'30%'}
//  border={'2px solid black'}
 justify={'space-between'}
 align={'center'}
 px={'30px'}
 // To make the Navbar Responsive
//  display={['none', 'none', "none", 'flex']} or 
display={{base: 'none', xl: 'flex' }}
// For media Query
sx={{
  'media and (max-width:1200px)':  {

  }
}}
 >
 {/* For SECTION(Links) Instead of using the <a></a> Tag, 
 |For Chakra we use <ChakraLink></ChakraLink>. */}
{/*Instead of <a href="#"style={{padding: '10px'}}>Home</a> */}
<ChakraLink textDecoration={'underline'} 
 _hover={{
textDecoration: 'Overline',
}} 
_active={{
  transform: 'scale(.9)'
}}
href="#">
  Home
</ChakraLink>
<ChakraLink textDecoration={'underline'} 
 _hover={{
textDecoration: 'Overline',
}} 
_active={{
  transform: 'scale(.9)'
}}
href="#">
  About
</ChakraLink>
<ChakraLink textDecoration={'underline'} 
 _hover={{
textDecoration: 'Overline',
}} 
_active={{
  transform: 'scale(.9)'
}}
href="#">
 Contacts
</ChakraLink>
<ChakraLink textDecoration={'underline'} 
 _hover={{
textDecoration: 'Overline',
}} 
_active={{
  transform: 'scale(.9)'
}}
href="#">
FAQs
</ChakraLink>
</HStack>
</Flex>
  )
}

export default Navbar