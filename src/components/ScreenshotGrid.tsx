import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  slug: string | undefined;
}

const ScreenshotGrid = ({ slug }: Props) => {
  const { data, isLoading, error } = useScreenshots(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  if (data?.results.length == 0) return null;

  return (
    <SimpleGrid marginTop={10} columns={{ base: 1, md: 1, lg: 2 }} spacing={4}>
      {data?.results.map((res) => (
        <img key={res.id} src={res.image} />
      ))}
    </SimpleGrid>
  );
};

export default ScreenshotGrid;
