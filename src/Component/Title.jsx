import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Title = () => {
  return (
    <Box>
      <Text mt="2">PhotoGallary</Text>
      <Heading textAlign="center" mt="50px" size='lg' fontWeight='semibold'>
        Your pictures
      </Heading>
      <Text textAlign="center" mt="10px">
        Save Your Pictures here and download anytime on the go
      </Text>
    </Box>
  );
};
