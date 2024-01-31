import { Box, Heading, Spinner } from "@chakra-ui/react";
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
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data?.description_raw}</ExpandableText>
      <GameAttributes data={data} />

      <VideoPlayer slug={slug} />
      <ScreenshotGrid slug={slug} />
    </Box>
  );
};

export default GameDetailsPage;
