import React from "react";
import { useState } from "react";
import { Circle, Flex, Text, Input, InputGroup } from "@chakra-ui/react";

import { ProgressBar } from "./ProgressBar";

export const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/jpeg", "image/jpg", "image/png"];

  const fileInput = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please Select an Image");
    }
  };

  return (
    <Flex
      px={[20, 20, 30, 40]}
      justifyContent="center"
      alignItems="center"
      mt="20px"
      flexDirection="column"
    >
      <label htmlFor="file-upload">
        <InputGroup>
          <Circle
            size="30px"
            bg="tomato"
            color="white"
            fontWeight="bold"
            pb="2px"
            textAlign="center"
          >
            +
          </Circle>
          <Input
            type="file"
            id="file-upload"
            name="file-upload"
            display="none"
            onChange={fileInput}
          />
        </InputGroup>
      </label>

      {error && (
        <Text mt="5px" fontSize="sm" color='tomato'>
          {error}
        </Text>
      )}

      {file && (
        <Text mt="5px" fontSize="sm" >
          <Text as='samp' mr='10px'>Uploading...</Text>
          <Text as='samp'>{`"${file.name}"`}</Text>
        </Text>
      )}

      {file && <ProgressBar file={file} setFile={setFile} />}
    </Flex>
  );
};
