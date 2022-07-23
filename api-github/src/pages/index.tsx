import { Box, HStack, Input, Spinner, VStack } from "@chakra-ui/react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { stringify } from "querystring";
import { useState } from "react";
import { InputSearch } from "../components/InputSearch";
import { ReposCard } from "../components/ReposCard";
import { Layout } from "../layout";
import { getUserInfo } from "../services/queries/getUserInfo";

const Home: NextPage = () => {
  const [userToSearch, setUserToSearch] = useState<string>("");
  const [enableSearch, setEnableSearch] = useState<boolean>(false);

  const queryClient = new QueryClient();

  const { data: userReposData, isLoading } = useQuery(
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
  console.log(userReposData, isLoading);

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
            Boolean(userReposData) && (
              <VStack>
                {userReposData?.map((repo) => (
                  <ReposCard key={repo.id} />
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
