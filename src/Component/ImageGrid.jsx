import React, { useEffect } from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

import { useFirestore } from "../hooks/useFirestore";

export const ImageGrid = ({ setSelectedImage, onOpen }) => {
  const { docs } = useFirestore("Images");

  return (
    <Box mt="100px">
      <Grid templateColumns="repeat(4, 1fr)" gap={10}>
        {docs.map((doc) => (
          <GridItem
            key={doc.id}
            boxShadow="sm"
            onClick={onOpen}
          >
            <Image rounded="md" src={doc.url} onClick={()=>setSelectedImage(doc.url)} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
