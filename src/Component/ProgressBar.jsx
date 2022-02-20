import { Box, Progress } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useStorage } from "../hooks/useStorage";

export const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Box w="100%" mt="5px">
      <Progress size="xs" value={progress} rounded="full" />
    </Box>
  );
};
