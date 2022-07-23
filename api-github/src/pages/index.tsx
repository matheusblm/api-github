import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { getUserInfo } from "../services/queries/getUserInfo";

const Home: NextPage = () => {
  const query = useQuery(["userNameSearch"], () => getUserInfo("matheusblm"));

  return (
    <div>
      <Box></Box>
    </div>
  );
};

export default Home;
