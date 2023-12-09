import React, { useState } from "react";
import QRCode from "qrcode.react";

import { useMutation } from "@apollo/client";
import { ADD_OBJECT } from "../apollo/tasks";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const AddTask = () => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [generatedLink, setGeneratedLink] = useState("");

  const [addObject] = useMutation(ADD_OBJECT);

  const generateQRCode = async () => {
    try {
      const { data } = await addObject({
        variables: {
          title: text,
          description: description,
          photo_url: photo ? photo.name : null,
          completed: false,
        },
      });

      const qrCodeId = data.createQrCode.id;
      const objectLink = `/task/${qrCodeId}`;

      console.log(data);

      setGeneratedLink(objectLink);
    } catch (error) {
      console.error("Ошибка при создании QR-кода:", error);
    }
  };

  // Обработчик загрузки фотографии
  const handlePhotoUpload = (event) => {
    const uploadedPhoto = event.target.files[0];
    setPhoto(uploadedPhoto);
  };

  return (
    <Box maxW="md" m="auto" p={4}>
      <FormControl>
        <FormLabel>Введите текст:</FormLabel>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          mb={4}
        />

        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mb={4}
        />

        <FormLabel>Выберите фотографию:</FormLabel>
        <InputGroup>
          <Input type="file" accept="image/*" onChange={handlePhotoUpload} />
          <InputRightElement>
            <Button
              as="label"
              htmlFor="fileInput"
              leftIcon={<AddIcon />}
              cursor="pointer"
              variant="outline"
            ></Button>
          </InputRightElement>
        </InputGroup>
        <Button onClick={generateQRCode} mt={4} colorScheme="blue">
          Создать QR
        </Button>

        {generatedLink && (
          <Box mt={4}>
            <QRCode value={generatedLink} />
          </Box>
        )}
      </FormControl>
    </Box>
  );
};

export default AddTask;
