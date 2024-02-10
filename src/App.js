import React from "react";
import { Box } from "@chakra-ui/react";

import { Navbar } from "./Component/Navbar";
import { Body } from "./Component/Body";
import { Footer } from "./Component/Footer";

export const App = () => {
  return (
    <Box minH="100vh">
      <Navbar>
        <Body />
        <Footer />
      </Navbar>
    </Box>
  );
};
