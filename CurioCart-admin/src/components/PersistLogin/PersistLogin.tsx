import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRefreshToken } from "../../hooks/useRefreshToken";
import { useAuthContext } from "../../hooks/useAuthContext";
import Loader from "../Loader/Loader";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, setAuth } = useAuthContext();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const res = await refresh();
        setAuth(res);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    !auth ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
