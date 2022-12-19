import React from "react";
import axios from "axios";
import Photo from "../../assesst/backcolor.jpg";

import {
  Flex,
  useToast,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  Center,
  Link,
  Image,
  VStack,
  WrapItem,
  Wrap,
  Heading

} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "../../assesst/jedu.PNG";

const initialStateData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};
function SignupCard() {
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(initialStateData);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  async function signUp(e) {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert("Password is not matches with confirm password");
    } else {
      const url = `${process.env.REACT_APP_SERVER}/root/user/signup`; //http://localhost:5000/root/user/signup
      const user = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        birthday: data.birthday,
      };
      const addedUser = await axios.post(url, user).then((res) => {
        toast({
          title: "Signed successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      });

      console.log(addedUser.data);
    }
  }

  
  return (
    <Flex w={"100%"}>
      <VStack align={"center"} w="100%" zIndex={1}>
        <Image alt="Image Not Found" src={Photo} w={"100%"} h="100vh" zIndex={0} />
        <Box
        position={"absolute"}
          top="20vh"
          bg="gray.200"
          color="#0B0E3F"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Sign up</Heading>
                  
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                    
                         <FormControl isRequired>
                           <FormLabel>Full Name</FormLabel>
                           <Input
                             type="text"
                             name="fullName"
                             onChange={(e) => handleChange(e)}
                           />
                         </FormControl>
                       
                       <FormControl isRequired>
                       <FormLabel>Email address</FormLabel>
                       <Input
                         type="email"
                         name="email"
                         id="email"
                         onChange={(e) => handleChange(e)}
                       />
                     </FormControl>
                     <FormControl id="phonenumber" isRequired>
                         <FormLabel>Phone number</FormLabel>
                         <Input
                           type="tel"
                           name="phoneNumber"
                           onChange={(e) => handleChange(e)}
                         />
                       </FormControl>
                       <FormControl id="birthday" isRequired>
                         <FormLabel>Birthday</FormLabel>
                         <Input
                           type="date"
                           name="birthday"
                           onChange={(e) => handleChange(e)}
                         />
                       </FormControl>
                       <FormControl id="passwordsu" isRequired>
                       <FormLabel>Password</FormLabel>
                       <InputGroup>
                         <Input
                           type={showPassword ? "text" : "password"}
                           name="password"
                           onChange={(e) => handleChange(e)}
                         />

                         <InputRightElement>
                           <Button
                             variant={"ghost"}
                             onClick={() =>
                               setShowPassword((showPassword) => !showPassword)
                             }
                           >
                             {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                           </Button>
                         </InputRightElement>
                       </InputGroup>
                     </FormControl>
                     <FormControl id="confirmPassword" isRequired>
                       <FormLabel>Confirm Password</FormLabel>
                       <InputGroup>
                         <Input
                           type={showPassword ? "text" : "password"}
                           name="confirmPassword"
                           onChange={(e) => handleChange(e)}
                         />

                         <InputRightElement>
                           <Button
                             variant={"ghost"}
                             onClick={() =>
                               setShowPassword((showPassword) => !showPassword)
                             }
                           >
                             {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                           </Button>
                         </InputRightElement>
                       </InputGroup>
                     </FormControl>
                      
                      <FormControl id="name" float="right">
                      <Button
                         loadingText="Submitting"
                         size="lg"
                         bg={"blue.400"}
                         color={"white"}
                         _hover={{
                           bg: "blue.500",
                         }}
                         onClick={signUp}
                       >
                         Sign up
                       </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}
export default SignupCard;
