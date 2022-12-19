import React from "react";
import brain from "../../assesst/Brain_.png";
import { extendTheme } from '@chakra-ui/react'
import d1 from '../../assesst/depertment-1.png'
import d2 from '../../assesst/depertment-2.png'
import d3 from '../../assesst/depertment-3.png'
import './home.css'

import {
  Box,
  Button,
  FormControl,
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

       <section class="departments">
        <div class="container"> 
       <img src="./assets/images/departmets-vector.svg" alt="Vector line art" class="vector-line"/> 

       <h2 class="h2 departments-title">Most Popular Courses</h2>

          <ul class="departments-list">
            <li>
              <div class="departments-card">
                <a href="#" class="card-banner">
                  <figure> 
       <img src={d1} alt="Artificial Intelligence" /> 
       </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Artificial Intelligence</h3>
                </a>

                <p class="card-text">
                  Artificial Intelligence Artificial Intelligence Artificial
                  Intelligence Artificial Intelligence.
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div class="departments-card">
                <a href="#" class="card-banner">
                  <figure> 
       <img src={d2} alt="Civil Engineering" /> 
       </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Software Engineering</h3>
                </a>

                <p class="card-text">
                  Software Engineering Software EngineeringSoftware Engineering
                  Software Engineering
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div class="departments-card">
                <a href="#" class="card-banner">
                  <figure> 
       <img src={d3} alt="Business Studies" /> 
       </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Financial Studies</h3>
                </a>

                <p class="card-text">
                  Financial Financial Financial Financial Financial Financial
                  Financial Financial.
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>
              </div>
            </li>
          </ul>

          <button class="btn btn-primary">View All Courses</button> 
       </div>
      </section> 
    </>
  );
};

// import {
//   Box,
//   Heading,
//   Text,
//   Link,
//   Flex,
//   Icon,
//   AspectRatio,
//   Img,
// } from "@chakra-ui/react";
// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import group16x9 from "../../assesst/HomeAsset/hero.jpg";

// export const Home = () => {
//   return (
//     <Box w="full" bg="blue.300" px="200px" py="60px" mb="120px">
//       <Flex justifyContent="space-between" alignItems="center" pb="80px">
//         <Heading fontSize={54} letterSpacing="6px" color="whiteAlpha.900">
//           Start your future education
//         </Heading>
//         <Box maxW="300px">
//           <Text color="whiteAlpha.700" pb="20px">
//             Proident aliquip elit nostrud dolore cupidatat id reprehenderit
//             magna enim ullamco eu consequat labore. Laboris irure ea pariatur
//             nulla exercitation Lorem duis. Nostrud id duis deserunt nostrud
//             commodo quis. Ipsum dolore dolore ut esse reprehenderit.
//           </Text>
//           <Link color="whiteAlpha.800">
//             Explore more
//             <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
//           </Link>
//         </Box>
//       </Flex>
//       <AspectRatio w="full" ratio={16 / 9} mb="-200px">
//         <Img src={group16x9} pb="60px" />
//       </AspectRatio>
//     </Box>
//   );
// };
