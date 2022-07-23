import { Box, HStack, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { BiSend } from "react-icons/bi";

type inputSearchProps = {
  handleSearch: (userInput: string) => void;
  isLoading: boolean;
};

export const InputSearch = ({ handleSearch, isLoading }: inputSearchProps) => {
  const [userInput, setUserInput] = useState<string>("");
  return (
    <Box>
      <HStack>
        <Input
          onChange={(event) => setUserInput(event?.target.value)}
          value={userInput}
          placeholder={"Digite o usuario"}
        />
        <IconButton
          aria-label="send"
          icon={<BiSend />}
          isLoading={isLoading}
          onClick={() => handleSearch(userInput)}
        />
      </HStack>
    </Box>
  );
};
