import { useAuthContext } from "./useAuthContext";
import { refresh } from "../services/AuthService";

export const useRefreshToken = () => {
  const { setAuth } = useAuthContext();

  const refreshToken = async () => {
    const response = await refresh();
    return response;
  };

  return refreshToken;
};
