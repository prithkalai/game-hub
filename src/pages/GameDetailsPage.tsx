import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import ScreenshotGrid from "../components/ScreenshotGrid";
import VideoPlayer from "../components/VideoPlayer";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, isError } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (isError || !data) throw new Error();

  return (
    <Box padding={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <GridItem>
          <Heading marginBottom={5}>{data?.name}</Heading>
          <ExpandableText>{data?.description_raw}</ExpandableText>
          <GameAttributes data={data} />
        </GridItem>
        <GridItem>
          <VideoPlayer slug={slug} />
          <ScreenshotGrid slug={slug} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailsPage;
