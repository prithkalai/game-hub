import { Box, Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  slug: string | undefined;
}

const VideoPlayer = ({ slug }: Props) => {
  const { data, isLoading, error } = useTrailer(slug!);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!data?.results[0]) return null;
  return (
    <Box marginTop={10}>
      <video
        controls
        style={{ borderRadius: "md" }}
        src={data?.results[0]?.data.max}
        poster={data?.results[0]?.preview}
      />
    </Box>
  );
};

export default VideoPlayer;
