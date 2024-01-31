import { useNavigate, useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data } = useGameDetails(slug!);

  return (
    <Box padding={5}>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
