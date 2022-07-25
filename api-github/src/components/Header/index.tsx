import { Box, Flex, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiFillGithub } from "react-icons/ai";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <Box bg="#e4e4e4" w="100%">
      <HStack justifyContent="center" gridGap="50px">
        <Box>
          <Flex flexDir="column">
            <HStack>
              <Icon fontSize="2xl" as={AiFillGithub} />
              <Text fontSize="2xl">GitHub Search User - API</Text>
            </HStack>
            <Text fontSize="xs" fontWeight="light" textAlign="center">
              Busque usuarios no github e veja seus repositorios!
            </Text>
          </Flex>
        </Box>
        <Box ml="20px">{children}</Box>
      </HStack>
    </Box>
  );
};
