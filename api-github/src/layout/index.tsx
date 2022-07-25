import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../components/Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <VStack spacing="6px" align="start">
        <Flex w="100%" maxW="100%" flexDir="column">
          {children}
        </Flex>
      </VStack>
    </Box>
  );
};
