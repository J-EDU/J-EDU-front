import { AspectRatio, Box, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

export const Cards = () => {

  return (
    <Box w="full">
      <AspectRatio ratio={5 / 7}>
        <Img pb="30px" />
      </AspectRatio>
      <Heading fontSize="24px" color="blue.900" pb="20px">

      </Heading>
      <Text color="blue.700" fontSize="14px">

      </Text>
    </Box>
  );
};
