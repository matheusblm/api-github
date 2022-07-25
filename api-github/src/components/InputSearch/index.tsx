import { Box, HStack, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

type inputSearchProps = {
  handleSearch: (userInput: string) => void;
  isLoading: boolean;
};

export const InputSearch = ({ handleSearch, isLoading }: inputSearchProps) => {
  const [userInput, setUserInput] = useState<string>("");
  return (
    <Box p="20px" borderWidth="1" borderColor="black">
      <HStack>
        <Input
          onChange={(event) => setUserInput(event?.target.value)}
          value={userInput}
          placeholder={"Digite o usuario"}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch(userInput);
            }
          }}
          bgColor="white"
          color="black"
        />
        <IconButton
          aria-label="send"
          icon={<BiSearch />}
          isLoading={isLoading}
          onClick={() => handleSearch(userInput)}
        />
      </HStack>
    </Box>
  );
};
