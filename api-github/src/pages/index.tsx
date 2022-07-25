import { Box, Flex, HStack, Input, Spinner, VStack } from "@chakra-ui/react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useState } from "react";
import { Header } from "../components/Header";
import { InputSearch } from "../components/InputSearch";
import { RepositoryCard } from "../components/RepositoryCard";
import { UserResult } from "../components/UserResult";
import { Layout } from "../layout";
import { getUserInfo } from "../services/queries/getUserInfo";
import { getUserRepos } from "../services/queries/getUserRepos";

const Home: NextPage = () => {
  const [userToSearch, setUserToSearch] = useState<string>("");
  const [enableSearch, setEnableSearch] = useState<boolean>(false);

  const queryClient = new QueryClient();

  const { data: userRepositorysData, isLoading } = useQuery(
    ["userNameSearch", userToSearch],
    () => getUserRepos(userToSearch),
    {
      enabled: enableSearch,
      onSuccess: () => {
        queryClient.invalidateQueries(["userNameSearchInfo", userToSearch]);
        queryClient.invalidateQueries(["userNameSearch", userToSearch]);
        setEnableSearch(false);
      },
    }
  );

  const { data: userInfoData } = useQuery(
    ["userNameSearchInfo", userToSearch],
    () => getUserInfo(userToSearch),
    {
      enabled: enableSearch,
      onSuccess: () => {
        queryClient.invalidateQueries(["userNameSearchInfo", userToSearch]);
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
      <Header>
        <InputSearch
          handleSearch={handleSearch}
          isLoading={isLoading && enableSearch}
        />
      </Header>
      <Box>
        <HStack>
          {isLoading && enableSearch ? (
            <Spinner />
          ) : (
            Boolean(userRepositorysData) &&
            Boolean(userInfoData) && (
              <Box w="100%" h="100%">
                <VStack justifyContent="center" gridGap="50px">
                  <Box>
                    <Flex flexDir="column">
                      <UserResult userData={userInfoData} />
                    </Flex>
                  </Box>
                  <VStack maxH="400px" overflow="auto">
                    {userRepositorysData?.map((repository) => (
                      <RepositoryCard
                        key={repository.id}
                        repository={repository}
                      />
                    ))}
                  </VStack>
                </VStack>
              </Box>
            )
          )}
        </HStack>
      </Box>
    </Layout>
  );
};

export default Home;
