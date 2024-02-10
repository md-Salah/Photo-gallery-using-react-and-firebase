import React, { useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { Title } from "./Title";
import { UploadForm } from "./UploadForm";
import { ImageGrid } from "./ImageGrid";

export const Body = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Large View</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image mb="15px" rounded="md" src={selectedImage} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
