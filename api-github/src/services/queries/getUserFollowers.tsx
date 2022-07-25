import { AxiosResponse } from "axios";
import { api } from "../api";
import { UserFollowers } from "./types";

export const getuserFollowers = async (
  userName: string
): Promise<UserFollowers> => {
  const { data }: AxiosResponse<UserFollowers> = await api.get(
    `${userName}/followers`
  );
  return data;
};
