import React, { useEffect, useState } from "react";
import axios from "axios";
import cookies from "react-cookies";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Flex,
  Divider,
  Stack,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const initialStateData = {
 text: "",
  
};
export default function ViewFeedback() {
  const [data, setState] = useState([]);
  useEffect(() => {
    //   const token = cookies.load("token");
      const url = `${process.env.REACT_APP_SERVER}/root/feedback`; //http://localhost:5000/root/feedback

    const viewfeedback = {
      text: data.text
     
    };
    // const bearer = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    axios.get(url).then((res) => {
      setState(res.data.feedback);
    });
  }, []);

  return (
    <Flex>{data.length >= 0 && data.map((val, idx) => (
    <Card maxW="sm" key={idx}>
      <CardBody>
        <Stack mt="6" spacing="3" >
          <Heading fontSize="2xl">Feedback</Heading>
          <Text color="blue.600" fontSize="2xl">{val.text}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>))}
    </Flex>
  );
}