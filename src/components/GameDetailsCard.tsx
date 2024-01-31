import { Box, Text } from "@chakra-ui/react";

interface Props {
  heading: string;
  data: string[];
}

const GameDetailsCard = ({ heading, data }: Props) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.600" fontSize="lg">
        {heading}
      </Text>
      {data.map((index) => (
        <Text fontSize="md">{index}</Text>
      ))}
    </Box>
  );
};

export default GameDetailsCard;
