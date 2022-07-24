import { Box, HStack, Input, Spinner, VStack } from "@chakra-ui/react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useState } from "react";
import { InputSearch } from "../components/InputSearch";
import { RepositoryCard } from "../components/RepositoryCard";
import { Layout } from "../layout";
import { getUserInfo } from "../services/queries/getUserInfo";

const Home: NextPage = () => {
  const [userToSearch, setUserToSearch] = useState<string>("");
  const [enableSearch, setEnableSearch] = useState<boolean>(false);

  const queryClient = new QueryClient();

  const { data: userRepositorysData, isLoading } = useQuery(
    ["userNameSearch", userToSearch],
    () => getUserInfo(userToSearch),
    {
      enabled: enableSearch,
      onSuccess: () => {
        queryClient.invalidateQueries(["userNameSearch", userToSearch]);
        setEnableSearch(false);
      },
    }
  );
  const handleSearch = (userName: string) => {
    if (userName.length > 0) {
      setEnableSearch(true);
      setUserToSearch(userName);
    }
  };

  return (
    <Layout>
      <Box>
        <InputSearch
          handleSearch={handleSearch}
          isLoading={isLoading && enableSearch}
        />
        <HStack>
          {isLoading && enableSearch ? (
            <Spinner />
          ) : (
            Boolean(userRepositorysData) && (
              <VStack>
                {userRepositorysData?.map((repository) => (
                  <RepositoryCard key={repository.id} repository={repository} />
                ))}
              </VStack>
            )
          )}
        </HStack>
      </Box>
    </Layout>
  );
};

export default Home;
