import React from "react";
import axios from "axios";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  Link,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "../assesst/jedu.PNG"

const initialStateData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};
function SignupCard() {
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
      const addedUser = await axios.post(url, user);

      console.log(addedUser.data);
    }
  }
  return (
    <Flex diection={"column"} w={"100%"} gap={"32px"}>
      <VStack w="100%" p="20px">
        <Box
          alignSelf="center"
          p={"64px 20px"}
          w={["100%", "80%"]}
          bg="gray.200"
          border={"1px solid"}
          borderColor="gray.100"
          borderRadius={"20px"}
          filter={"drop-shadow(0px 4px 10px rgba(213, 213, 230, 0.75)"}
          align="center"
        >
          <Center>
            <VStack
              m="auto"
              position={"relative"}
              w="80%"
              align="Start"
              gap="20px"
            >
              <Flex
                direction={"row"}
                justifyContent={"space-between"}
                h={"100%"}
                w="100%"
              >
                {/* <Flex w='75%' ><Image w="100%" h="100%" src={"https://alphadynamic.in/images/blogs/onlineedu.jpg"} alt="Image not found" /></Flex> */}
                <VStack spacing={8} align="start" py={12} alignSelf="center" px={8}>
                  <Image src={logo} alt="Image Not Found" />
                  <Heading fontSize={"32px"} textAlign={"center"}>
                    Sign up
                  </Heading>
                  <Text fontSize={"26px"} color={"gray.600"}>
                    Welcome in our webiste ✌️
                  </Text>
                </VStack>
                <VStack spacing={8} py={12} px={6}>
                  <Box boxShadow={"lg"} p={8} bg="white">
                    <Stack spacing={4}>
                      <HStack>
                        <Box>
                          <FormControl isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input
                              type="text"
                              name="fullName"
                              onChange={(e) => handleChange(e)}
                            />
                          </FormControl>
                        </Box>
                      </HStack>
                      <FormControl isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          onChange={(e) => handleChange(e)}
                        />
                      </FormControl>
                      <Box>
                        <FormControl id="phonenumber" isRequired>
                          <FormLabel>Phone number</FormLabel>
                          <Input
                            type="tel"
                            name="phoneNumber"
                            onChange={(e) => handleChange(e)}
                          />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="birthday" isRequired>
                          <FormLabel>Birthday</FormLabel>
                          <Input
                            type="date"
                            name="birthday"
                            onChange={(e) => handleChange(e)}
                          />
                        </FormControl>
                      </Box>
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

                      <Stack spacing={10} pt={2}>
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
                      </Stack>
                      <Stack pt={6}>
                        <Text align={"center"}>
                          If you already have an account please click on{" "}
                          <Link color={"blue.400"}>
                            <u>Login</u>
                          </Link>
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </VStack>
              </Flex>
            </VStack>
          </Center>
        </Box>
      </VStack>
    </Flex>
  );
}
export default SignupCard;
