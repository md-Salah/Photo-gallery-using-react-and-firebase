import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const Navbar = ({ children }) => {
  return (
    <Box>
      <Box boxShadow='sm' py='3' position='fixed' w='100%' top='0' zIndex="banner" bg='white'>
        <Text mx="40">
          PhotoGallary
        </Text>
      </Box>
      {children}
    </Box>
  );
};
