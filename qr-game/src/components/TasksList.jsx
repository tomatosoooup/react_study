import { useQuery } from "@apollo/client";
import { ALL_OBJECTS } from "../apollo/tasks";

import { Link } from "react-router-dom";
import { Box, Flex, Stack } from "@chakra-ui/react";
import QRCode from "qrcode.react";

const TasksList = () => {
  const { loading, error, data } = useQuery(ALL_OBJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Flex
      flexWrap="wrap"
      justifyContent={{ base: "space-between", lg: "left" }}
      align="flex-start"
      pt={{ base: 0, lg: 12 }}
    >
      {data.getAllCodes.map((code) => (
        <Link to={`/task/${code.id}`} key={code.id}>
          <Box
            w={{ base: "165px", md: "175px" }}
            h={{ base: "165px", md: "175px" }}
            borderRadius="lg"
            boxShadow="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.100"
            cursor="pointer"
            m={2}
          >
            <QRCode value={code.id} size={150} />
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default TasksList;
