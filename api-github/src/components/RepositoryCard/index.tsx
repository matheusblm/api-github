import { Box, Flex, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { Repository } from "../../services/queries/types";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

type RepositoryCardProps = {
  repository: Repository;
};

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  console.log(repository);
  return (
    <Link
      href={repository.html_url}
      isExternal
      _hover={{ border: "0", opacity: "0.7" }}
    >
      <VStack
        borderBottom="0.4px"
        borderStyle="solid"
        borderColor="black"
        alignItems="start"
        p="20px"
        w={["194px", "194px", "400px", "400px"]}
      >
        <HStack justifyContent="space-between" w="100%">
          <Text color="a8dadc">{repository.name}</Text>
          <Icon as={BiLinkExternal} />
        </HStack>
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
