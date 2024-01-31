import { useNavigate, useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import {
  Box,
  Button,
  Heading,
  Spinner,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useGameDetails(slug!);
  const [flag, setFlag] = useBoolean();

  if (isLoading) return <Spinner />;

  if (isError || !data) throw new Error();

  return (
    <Box padding={5}>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data?.description_raw}</ExpandableText>
    </Box>
  );
};

export default GameDetailsPage;
