import React, { useEffect, useState } from "react";
import axios from "axios";
import cookies from "react-cookies";
import addCourse from "./addCourse"
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
  Heading,
} from "@chakra-ui/react";

const initialStateData = {

  fullName: "",
  description: "",
  Thumbnail: "",
  id:"",
  courseID:""
};
function AddVideo(props) {
  const toast = useToast();

  const [data, setData] = useState(initialStateData);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  async function addVideo(e) {
    e.preventDefault();
    const token = cookies.load("token");
    const url = `${process.env.REACT_APP_SERVER}/root/video/addvideo`; //http://localhost:5000/root/course/addcourse
    const video= {
      fullName: data.fullName,
      description: data.description,
      Thumbnail: data.Thumbnail,
      id: data.id,
      courseID: props.course.id
     
    };
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const addedVideo = await axios.post(url, video, bearer).then((res) => {
      toast({
        title: "Added successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });

    console.log(addedVideo.data);
  }
  return (
    <Flex w={"100%"}>
      <VStack align={"center"} w="100%" zIndex={1}>
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
                  <Heading>Add Video</Heading>
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
                        <FormLabel>Description</FormLabel>
                        <Input
                          type="text"
                          name="description"
                          id="description"
                          onChange={(e) => handleChange(e)}
                        />
                      </FormControl>
                      <FormControl id="" isRequired>
                        <FormLabel>courseID</FormLabel>
                        <Input
                          type="text"
                          name="language"
                          onChange={(e) => handleChange(e)}
                        />
                      </FormControl>
                      <FormControl id="thumbnail" isRequired>
                        <FormLabel>Thumbnail</FormLabel>
                        <Input
                          type="text"
                          name="thumbnail"
                          onChange={(e) => handleChange(e)}
                        />
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
                          onClick={addCourse}
                        >
                          Add Video
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
export default AddVideo;