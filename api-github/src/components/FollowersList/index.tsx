import { HStack, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { BiLinkExternal } from "react-icons/bi";
import { getuserFollowers } from "../../services/queries/getUserFollowers";

type FollowersListProps = {
  userName?: string;
};

export const FollowersList = ({ userName }: FollowersListProps) => {
  const { data: userFollowers } = useQuery(["userFollowers", userName], () =>
    getuserFollowers(userName || "")
  );
  return (
    <VStack maxH="400px" overflow="auto">
      {userFollowers?.map((follower) => (
        <Link
          href={follower.html_url}
          isExternal
          _hover={{ border: "0", opacity: "0.7" }}
          key={follower.id}
        >
          <VStack
            alignItems="start"
            p="20px"
            w={["194px", "194px", "400px", "400px"]}
          >
            <HStack justifyContent="space-between" w="100%">
              <Image
                src={follower?.avatar_url || ""}
                alt="avatar"
                borderRadius="5px"
                maxWidth="40px"
                maxHeight="40px"
              />
              <Text color="a8dadc">{follower.login}</Text>
              <Icon as={BiLinkExternal} />
            </HStack>
          </VStack>
        </Link>
      ))}
    </VStack>
  );
};
