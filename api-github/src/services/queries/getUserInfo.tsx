import { AxiosResponse } from "axios";
import { api } from "../api";
import { UserInfo } from "./types";

export const getUserInfo = async (userName: string): Promise<UserInfo> => {
  const { data }: AxiosResponse<UserInfo> = await api.get(`${userName}`);
  return data;
};
