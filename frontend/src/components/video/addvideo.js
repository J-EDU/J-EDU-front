import React, { useEffect, useState } from "react";
import axios from "axios";
import cookies from "react-cookies";

import {
  Card,
  Link,
  CardBody,
  CardFooter,
  Heading,
  Flex,
  Divider,
  Stack,
  Text,
  ButtonGroup,
  Button,
  AspectRatio,
  VStack,
} from "@chakra-ui/react";

const initialStateData = {
  fullName: "",
  description: "",
  Thumbnail: "",
  URL:"",
};
export default function ViewVideo() {
  const [data, setState] = useState([]);
  useEffect(() => {
      const token = cookies.load("token");
      const url = `${process.env.REACT_APP_SERVER}/root/video`; //http://localhost:5000/root/wishList

    const viewcourse = {
      fullName: data.fullName,
      description: data.description,
      Thumbnail: data.Thumbnail,
      URL:data.URL,
    };
    const bearer = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    axios.get(url,bearer).then((res) => {
      setState(res.data.videos);
    });
  }, []);

  return (
    <Flex>{data.length >= 0 && data.map((val, idx) => (
      <VStack w={"100%"}>
    <Card w={"50%"} key={idx}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading fontSize="2xl">{val.fullName}</Heading>
          <Text color="blue.600" fontSize="2xl">{val.description}</Text>
          <Text color="blue.600" fontSize="2xl">{val.Thumbnail}</Text>
          <AspectRatio  ratio={.5}>
  <iframe
    src={val.URL}
    allowFullScreen
  />
</AspectRatio>

        </Stack>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
    </VStack>))}
    
    </Flex>
  );
}