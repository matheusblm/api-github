import { Box, Flex, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../components/Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <HStack spacing="6px" align="start">
        <Header />
        <Flex w="100%" py={6} maxW="100%" px={6}>
          {children}
        </Flex>
      </HStack>
    </Box>
  );
};
