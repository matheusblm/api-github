import { Box, Flex, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { Repository } from "../../services/queries/types";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";

type RepositoryCardProps = {
  repository: Repository;
};

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  return (
    <Link
      href={repository.html_url}
      isExternal
      _hover={{ border: "0", opacity: "0.7" }}
    >
      <VStack
        borderBottom="0.5px"
        borderStyle="solid"
        borderColor="black"
        alignItems="start"
        p="20px"
        w={["194px", "194px", "400px", "400px"]}
      >
        <Box>
          <Text color="a8dadc">{repository.name}</Text>
        </Box>
        <HStack justifyContent="space-between" w="100%">
          <HStack>
            <Flex alignItems="center">
              <Icon as={AiFillStar} />
              <Text>{repository.stargazers_count}</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={AiOutlineFork} />
              <Text>{repository.forks_count}</Text>
            </Flex>
          </HStack>
          <Box>
            <Text>
              {repository.visibility === "public" ? "Publico" : "Privado"}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Link>
  );
};
