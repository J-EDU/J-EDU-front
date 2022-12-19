import React from "react";
import brain from "../../assesst/Brain_.png";
import CaptionCarousel from "./announ.js";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Box>
        <HStack alignContent={"center"}>
          <Image src={brain} ml={900} />

          <VStack>
            <HStack mt={50} ml={-2200}>
              <Heading>
                Start Your <br />
                Future Education
              </Heading>
            </HStack>
            <HStack>
              <Text ml={-1240} mt={5}>
                Education is a key to bright future. <br />
                Education is a powerful weapon as <br />
                it can transform our lives by enabling <br />
                us to live our dreams.
              </Text>
            </HStack>
            <HStack>
              <Button ml={-1240} mt={15}>
                Get Started
              </Button>
            </HStack>
          </VStack>
        </HStack>
      </Box>
      <CaptionCarousel />
    </>
  );
};
