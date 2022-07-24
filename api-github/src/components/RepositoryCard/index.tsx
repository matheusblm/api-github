import { Box, Text } from "@chakra-ui/react";
import { Repository } from "../../services/queries/types";

type RepositoryCardProps = {
  repository: Repository;
};

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  console.log(repository);
  return (
    <Box>
      <Text>Title</Text>
    </Box>
  );
};
