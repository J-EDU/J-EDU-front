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
  fullName: "",
  description: "",
  Thumbnail: "",
};
export default function WatchHistory() {
  const [data, setState] = useState([]);
  useEffect(() => {
    const token = cookies.load("token");
    const url = `${process.env.REACT_APP_SERVER}/root/watchhistory`; //http://localhost:5000/root/watchhistory
    const watchHistory = {
      fullName: data.fullName,
      description: data.description,
      Thumbnail: data.Thumbnail,
    };

    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(url,bearer).then((res) => {
      setState(res.data.result);
    });
  }, []);

  return (
    <Flex>{data.length > 0 && data.map((val, idx) => (
    <Card maxW="sm" key={idx}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading fontSize="2xl">{val.Thumbnail}</Heading>
          <Text color="blue.600" fontSize="2xl">{val.fullName}</Text>
          <Text color="blue.600" fontSize="2xl">{val.description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>))}
    </Flex>
  );
}