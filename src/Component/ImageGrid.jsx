import React, { useEffect } from "react";
import { Box, Grid, GridItem, Heading, Image, Spinner, Text } from "@chakra-ui/react";

import { useFirestore } from "../hooks/useFirestore";

export const ImageGrid = ({ setSelectedImage, onOpen }) => {
  const { docs } = useFirestore("Images");

  const imageClick = (url) => {
    setSelectedImage(url);
    onOpen();
  };

  return (
    <Box mt="100px" mx={[10, 20, 30, 40]}>
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}} gap={10}>
        {docs.map((doc, i) => (
          <GridItem
            key={i}
            boxShadow="base"
            onClick={() => imageClick(doc.url)}
          >
            <Image w='100%' src={doc.url} alt={<Spinner />} />
            <Box py='5' px='2'>
              <Heading size='md'>Your title</Heading>
              <Text size='md'>In your own risk download this picture</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
