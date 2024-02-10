import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Title = () => {
  return (
    <Box fontFamily='fantasy' px={{base: '30px', md:'40px'}}>
      <Heading textAlign="center" mt="100px" size='lg' fontWeight='semibold'>
        Your pictures
      </Heading>
      <Text textAlign="center" mt="10px" noOfLines='2'>
        Save Your Pictures here and download anytime on the go
      </Text>
    </Box>
  );
};
