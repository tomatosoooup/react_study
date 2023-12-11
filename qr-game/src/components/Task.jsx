import { useParams } from "react-router-dom";
import { GET_OBJECT } from "../apollo/tasks";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Task = () => {
  const { id } = useParams();
  const [objectData, setObjectData] = useState(null);

  const { loading, error, data } = useQuery(GET_OBJECT, {
    variables: { id },
  });

  useEffect(() => {
    if (!loading && !error && data) {
      setObjectData(data.getObject);
    }
  }, [loading, error, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={`/images/${objectData && objectData.photo_url}`}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{objectData && objectData.title}</Heading>
          <Text>{objectData && objectData.description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            to do
          </Button>
          <Button variant="ghost" colorScheme="blue">
            to do
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Task;
