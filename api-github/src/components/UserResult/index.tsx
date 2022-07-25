import { Box, Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";

import { UserInfo } from "../../services/queries/types";

type UseResultProps = {
  userData?: UserInfo;
};

export const UserResult = ({ userData }: UseResultProps) => {
  return (
    <Flex
      borderRadius="10px"
      shadow="xl"
      padding="20px"
      mt="20px"
      gridGap="20px"
    >
      <Box>
        <Image
          src={userData?.avatar_url || ""}
          alt="avatar"
          borderRadius="20px"
          maxWidth="200px"
          maxHeight="200px"
        />
      </Box>
      <Box>
        <VStack justifyContent="space-between" h="100%">
          <Link isExternal href={userData?.html_url}>
            <Text textAlign="start">
              {userData?.name} - @{userData?.login}
            </Text>
          </Link>
          <Text textAlign="start" fontWeight="light">
            {userData?.bio}
          </Text>
          <HStack>
            <Box textAlign="center" fontWeight="thin">
              <Text>{userData?.followers}</Text>
              <Text>seguidores</Text>
            </Box>
            <Box textAlign="center" fontWeight="thin">
              <Text>{userData?.following}</Text>
              <Text>seguindo</Text>
            </Box>
            <Box textAlign="center" fontWeight="thin">
              <Text>{userData?.public_repos}</Text>
              <Text>repositorios</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};
