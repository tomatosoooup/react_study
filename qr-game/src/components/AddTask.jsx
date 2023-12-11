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
} from "@chakra-ui/react";

const AddTask = () => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [generatedLink, setGeneratedLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [addObject] = useMutation(ADD_OBJECT);

  const generateQRCode = async () => {
    try {
      const { data } = await addObject({
        variables: {
          title: text,
          description: description,
          photo_url: image ? image.name : null,
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

    if (!image) return;

    try {
      const formData = new FormData();
      formData.append("file", image);

      const response = await fetch("http://localhost:3001/upload", {
        method: "POST",
        body: formData,
      });

      const { url } = await response.json();
      setImageUrl(url);
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    }
  };

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setImage(uploadedImage);
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
          id="input-1"
        />

        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mb={4}
          id="input-2"
        />

        <FormLabel>Выберите фотографию:</FormLabel>
        <InputGroup>
          <Input type="file" accept="image/*" onChange={handleImageUpload} />
        </InputGroup>
        <Button onClick={generateQRCode} mt={4} colorScheme="blue">
          Создать QR
        </Button>

        {generatedLink && (
          <Box mt={4}>
            <QRCode value={generatedLink} />
          </Box>
        )}
        {imageUrl && <img src={imageUrl} alt="uploaded" />}
      </FormControl>
    </Box>
  );
};

export default AddTask;
