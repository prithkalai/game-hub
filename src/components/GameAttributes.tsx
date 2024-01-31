import { SimpleGrid } from "@chakra-ui/react";
import { GameDetails } from "../entities/GameEntities";
import GameDetailsCard from "./GameDetailsCard";
import MetacriticCard from "./MetacriticCard";

interface Props {
  data: GameDetails;
}

const GameAttributes = ({ data }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={10} marginTop={10}>
      <GameDetailsCard
        heading="Platforms"
        data={data.parent_platforms.map((p) => p.platform.name)}
      />
      <MetacriticCard score={data.metacritic} />
      <GameDetailsCard heading="Genres" data={data.genres.map((g) => g.name)} />
      <GameDetailsCard
        heading="Publishers"
        data={data.publishers.map((p) => p.name)}
      />
    </SimpleGrid>
  );
};

export default GameAttributes;
