import { AxiosResponse } from "axios";
import { api } from "../api";
import { GithubUserResponse } from "./types";

export const getUserInfo = async (
  userName: string
): Promise<GithubUserResponse> => {
  const { data }: AxiosResponse<GithubUserResponse> = await api.get(
    `${userName}/repos`
  );
  return data;
};
