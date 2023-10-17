import { refresh } from "../services/AuthService";

export const useRefreshToken = () => {
  const refreshToken = async () => {
    const response = await refresh();
    return response;
  };

  return refreshToken;
};
