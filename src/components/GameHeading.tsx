import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../data/gameQueryStore";

const GameHeading = () => {
  const platform = useGameQueryStore((s: any) => s.gameQuery.platform);
  const genre = useGameQueryStore((s: any) => s.gameQuery.genre);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
