// import { useState } from 'react'
// import emailjs from 'emailjs-com'
// import Swal from 'sweetalert2'
// import data from '../data/data.json'
// import Address from './Address'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { HStack,VStack,Button,Input,Box,Text,Textarea,Flex, useColorMode,Heading,Card,Stack } from '@chakra-ui/react'
// // import { Card } from 'react-bootstrap'

// const render = (status) => {
//   return <h1>{status}</h1>;
// };

// const initialState = {
//   name: '',
//   email: '',
//   message: '',
// }
// export const Contact = (props) => {
//   const [{ name, email, message }, setState] = useState(initialState)
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setState((prevState) => ({ ...prevState, [name]: value }))
//   }
//   const colorMode = useColorMode();
//   const clearState = () => setState({ ...initialState })
 
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(name, email, message)
//     emailjs
//       .sendForm(
//         'service_2cjp36l', 'template_f0h7c7c', e.target, 'jNPHH3K2W5KXojBHW'
//       )
//       .then(
//         (result) => {
//           Swal.fire(
//             'Thanks for contacting us ',
//             'Email Sent Successfully ',
//             'success'
//           )
//           clearState()
//         },
//         (error) => {
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//             footer: 'Email was not Sent '
//           })
//         }
//       )
//   }
//   return (
//     <div>
//                 <Heading as='b'
//                >Get In Touch</Heading>
//                 <Text>
//                   Please fill out the form below to send us an email and we will<br/>
//                   get back to you as soon as possible.
//                 </Text>
            
//               <HStack>
//                 <Card  align='center'  maxW='lg' margin={200} >
                
//               {/* <Box display='flex' alignItems='center' margin={100}> */}
//               <form name='sentMessage' validate onSubmit={handleSubmit}>
//               <Stack mt='6' spacing='3'>
//               {/* <VStack w='600px'> */}
        
                  
                    
//                       <Input placeholder='Name' name='name' required _placeholder={{ opacity: 0.8, color: '#628E90' }} width={500}
                  
//                         onChange={handleChange}
//                       />
                      
//                       <Input  placeholder='Email' name='email' required _placeholder={{ opacity: 0.8, color: '#628E90' }} width={500}
  
//                         onChange={handleChange}
//                       />
                     
//                   <Textarea placeholder='How can we help you?' name='message' size='lg'  required _placeholder={{ opacity: 0.8, color: '#628E90' }} 
                    
//                     onChange={handleChange}
//                   ></Textarea>
                  
//                 <Button type='submit'  
//                  bg= "#B4CDE6"
//               color={colorMode === "light" ? "#B4CDE6" : "#F5EFE6"}
//               _hover={{ bg: colorMode === "light" ? "#B4CDE6" : "#F5EFE6" }}
//               ml="1rem" w="40%" >
//                   Send Message
//                 </Button>
//                 {/* </VStack> */}
//                 </Stack>
//               </form>
              
//               </Card>
//            {/* </Box> */}

           
//            {/* <Box display='flex' alignItems='center' margin={100}>
//               <VStack w='500px' > */}
//               <Card  align='center' margin={200} w="40%" h="60%" backgroundColor='#F5EFE6' padding={50}>

//             <Heading>Contact Info</Heading>
//             <Stack mt='6' spacing='3'>
//               <p>
//                 <span>
//                   <i className='fa fa-phone'></i> Phone
//                 </span>{' '}
//                 {data.Contact ? data.Contact.phone : 'loading'}
//               </p>
            
//               <p>
//                 <span>
//                   <i className='fa fa-envelope-o'></i> Email
//                 </span>{' '}
//                 {data.Contact ? data.Contact.email : 'loading'}
//               </p>
        
             
//                 <span>
//                   <i className='fa fa-map-marker'></i> Address
//                 </span>
              
//                 {data.Contact.address ? data.Contact.address : 'loading'}
//                 <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
                
//                 <Address />
//                 </Wrapper>
//                 </Stack>
                
              
//               </Card>
//             {/* </VStack>
//             </Box> */}
//             </HStack>
           
           
          
     
//     </div>
//   )
// }




