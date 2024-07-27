import { createContext, ReactNode, useEffect, useState } from "react";
import { ContextProps } from "../types/Context";
import { generateFakeJWT, isTokenExpired } from "../utils/generateFakeJWT";

export const AppContext = createContext<ContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isTokenExpired(token)) {
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("token");
    }
  }, []);

  // Function to handle user login
  const login = (username: string, password: string) => {
    if (username === "user" && password === "password") {
      const token = generateFakeJWT();
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      return true;
    } else {
      console.error("Invalid credentials");
      return false;
    }
  };

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return <AppContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AppContext.Provider>;
};

export default AppProvider;
