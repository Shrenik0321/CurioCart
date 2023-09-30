import { createContext, useState, ReactNode } from "react";

type AuthContextItems = {
  message: string;
  statusCode: number;
  authStatus: boolean;
  accessToken: string;
};

interface AuthContextType {
  auth: AuthContextItems | null;
  setAuth: React.Dispatch<AuthContextItems | null>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<AuthContextItems | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
