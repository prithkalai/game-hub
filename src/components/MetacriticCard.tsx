import { Box, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";

interface Props {
  score: number;
}

const MetacriticCard = ({ score }: Props) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.600" fontSize="lg">
        MetaCritic
      </Text>
      <CriticScore score={score} />
    </Box>
  );
};

export default MetacriticCard;
