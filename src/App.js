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
import React, { useEffect, useState } from "react";
import { ImageGrid } from "./Component/ImageGrid";

import { Title } from "./Component/Title";
import { UploadForm } from "./Component/UploadForm";

export const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mx="40" minH="100vh">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Large View</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image mb='15px' rounded="md" src={selectedImage} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
