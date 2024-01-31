import { useNavigate, useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (isError || !data) throw new Error();

  return (
    <Box padding={5}>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
