import { Box, Flex, Stack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"50px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Stack direction={"row"} spacing={2} alignItems="center">
          {[1, 2, 3].map((navItem) => (
            <Box key={navItem}>
              <Box
                p={2}
                fontSize={"md"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              ></Box>
            </Box>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};
