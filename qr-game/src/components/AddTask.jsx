import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_OBJECT } from "../apollo/tasks";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import TasksList from "./TasksList";

const AddTask = () => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const { colorMode } = useColorMode();

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
      if (!data) {
        return;
      }
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

      if (!response.ok) {
        return;
      }
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    }
  };

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setImage(uploadedImage);
  };

  return (
    <Stack direction={{ base: "column", lg: "row" }} spacing="4">
      <Box
        maxW={{ base: "100%", md: "75%", lg: "25%" }}
        m={{ base: "auto", lg: "0" }}
        p={4}
        pt={{ base: 0, lg: 12 }}
        ml={{ md: "auto", lg: 0 }}
        // borderRight={{ base: "none", lg: "1px solid" }}
        borderColor="gray.200"
      >
        <FormControl>
          <FormLabel>Введите текст:</FormLabel>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            mb={4}
            id="input-1"
            _focus={{
              borderColor: colorMode === "light" ? "blue.400" : "blue.200",
              boxShadow:
                colorMode === "light"
                  ? "0 0 0 1px blue.400"
                  : "0 0 0 1px blue.200",
            }}
            mode={colorMode}
          />

          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            mb={4}
            id="input-2"
            _focus={{
              borderColor: colorMode === "light" ? "blue.400" : "blue.200",
              boxShadow:
                colorMode === "light"
                  ? "0 0 0 1px blue.400"
                  : "0 0 0 1px blue.200",
            }}
            mode={colorMode}
          />

          <FormLabel>Выберите фотографию:</FormLabel>
          <InputGroup>
            <Input type="file" accept="image/*" onChange={handleImageUpload} />
          </InputGroup>
          <Button onClick={generateQRCode} mt={4} colorScheme="blue">
            Создать QR
          </Button>
        </FormControl>
      </Box>

      <Box flex={1} px={{ base: 4, md: 0 }}>
        <TasksList w={{ base: "100%", md: "75%" }} mx="auto" mt={8} />
      </Box>
    </Stack>
  );
};

export default AddTask;
