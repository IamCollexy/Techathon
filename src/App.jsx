import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
// import Test from './Components/Test/Test';
// import {age, School, Home, Job} from './Components/Test/Export';
// import {Container} from './Components/Test/Container/Container';
import ChildrenProps from './Components/ChildrenProps';
import {Box, Text} from '@chakra-ui/react';
import {Button} from '@chakra-ui/react'; 



 const App = () => {
   // useState is used instead of the long "getElementById.innerHTML" method
   const [name, setName] = useState('Collins')
   const [show, setShow ] = useState(false)
   const [arr, setArr] = useState([1, 2, 4, 56]);
   
   const handleClick = () => {
      setName('CollexydeGreatest') /* Sting */
      /* use to dynamically change the name rendered instead of onclick getDocumentById.innerHtml*/ 
      setShow((prev) => !prev); /* Boolean */
      // Creating a toggle function, If that prev ( prev can be any name ) is true then change to false, vice-versa.  
      // setArr([10]) /* Array */
      // In order to add to the array value without altering the value already set, we need to use ...rest method. 
      setArr([...arr, 18])
   }; 
   // console.log(name);
   console.log(arr);
   return (
   
    <Box>
         <Navbar/>
   <ChildrenProps> 
      {/* <Text>Hello! {name} I am a child of ChildrenProps Component</Text>
      To show this name dynamically we can use the : */}
      {show && <Text>Hello! {name} I am a child of ChildrenProps Component</Text>}
      <Button 
      bgColor={'green'}
      color={'white'}
      my={5}
      _hover={{
         bgColor: 'green',
      }}
      // onClick={() => setName('Collexy')}
      onClick={handleClick} /* use to dynamically change the name rendered instead of onclick getDocumentById.innerHtml*/
      >Change Name</Button>
   </ChildrenProps>
      </Box>
         )
      };
      export default App

//...............................................
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//    const objArr = [
//       {
//          name: 'Collexy',
//          age: '24',
//          status: 'Billionaire'
//       },
//       {
//          name: 'Collins',
//          age: '24',
//          status: 'Billionaire'
//       },
//       {
//          name: 'Ikpeme',
//          age: '24',
//          status: 'Billionaire'
//       },
//       {
//          name: 'CDG',
//          age: '24',
//          status: 'Billionaire'
//       },
//       {
//          name: 'CollexydeGreatest',
//          age: '24',
//          status: 'Billionaire'
//       }
//    ];
   //send all the data of the object to any component in this case <Container/>
   // and use {variable name in this case 'renderArr'} to render the whole component(page)
   // const renderArr = objArr.map((item, index)=>{
   //    return <Container item={item} key={index} />; 
   // });

   // {renderArr}
//.....................................
  //return
//   <Navbar/>
//   <Container 
//   header={'Box 1'}
//   text={'Hello World'} 
//   className={'BOOK 1'} 
//   border={'2px solid black'}
//   width={'30%'}
//   arr={arr}
//   />

//   <Container 
//   header={'Box 2'} 
//   text={'We will make this Tech Money'} 
//   className={'BOOK 2'} 
//   border={'2px solid yellow'}
//   width={'60%'} 
//   />

// <Container 
//  header={'Box 3'} 
//  text={'I enjoy learning React'} 
//  className={'BOOK 3'} 
//  border={'2px solid red'}
//  width={'90%'}
//  />
//.........................................

// return
   // <Navbar/>
   //......................................

      // return
   // Below are some PROPS
   // <Container 
   // header={'Welcome to React'} 
   // text1={'Welcome to the Page'} 
   // text2={'Welcome to React by Collexy'}
   // />
   {/* Props with different values */}
   // <Container 
   // header={'Welcome Collins'} 
   // text1={'You are therefore Welcomed'} 
   // text2={'Welcome to React by Collexy'}
   // />
//...........................................................
//   const react = 'wonderful'
//    const person = {
//      name : 'James',
//      age: 13,
//      job: 'front end engineer',
//    };

//Destructuring 

   // one way to destructure an Object 
// const { age, job } = person;

// rest Operator 
// const { ...rest } =  person;
// console.log(rest);
//..............................................

//  const namer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

 // map function
//  const renderNums = namer.map((num)=> {
// return <h1 style={{color: 'red'}}>{num}</h1>
//  })

//filter function 
// const renderFilter = namer.filter((num) => num >= 8);
// console.log(renderFilter);

//find function
// const renderFind = namer.find((num) => num === 1);
// console.log(renderFind);
//  console.log(check.find((item) => item === 3));

//  Destructuring using Array
//  const [one, two, ,Collins, ...rest] = namer;
//  console.log(rest);
//...........................................................

// const age = 20; 
// using if/else statements
// if (age >= 30) {
// console.log('you be Baba o')
// } else {
//   console.log('you still de grow, my guy');
// }
// using Tenary operator
//  const renderAge =
//  age >= 30 
//  ?  'you be baba o'
//  : age == 25
//  ?  'you are almost there, my guy'
//  :  "what's your age sef ?";

   // Circuit Operator
// For  &&
//  const renderCircuit = age && 'You are Old O!'
// For ||
//  const renderCircuit = age || 'You are Old O!'

   //return 
   // <div>
   //.......................

  {/* <h1>APP</h1>
  //.....................

  <Test/>
  //...........................
  <div>{age}</div>
  <div>{School}</div>
  <div>{Home}</div>
  <div>{Job}</div> */}
  //................................

  {/* {renderNums} */}
  {/* {renderFilter} */}
  {/* {renderFind} */}


  //..................................
  {/* <h1>{renderAge}</h1> */}
  {/* <h1>{renderCircuit}</h1> */}
  {/* </div> */}
