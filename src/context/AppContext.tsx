import { createContext, ReactNode, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";
import { ContextProps } from "../types/Context";

export const AppContext = createContext<ContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && SECRET_KEY) {
      try {
        // Verify the token using the secret key
        jwt.verify(token, SECRET_KEY);
        setIsAuthenticated(true);
      } catch (error) {
        // Clear the token if verification fails
        localStorage.removeItem("token");
      }
    }
  }, []);

  // Function to handle user login
  const login = (username: string, password: string) => {
    // Simulate user verification
    if (username === "user" && password === "password" && SECRET_KEY) {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } else {
      console.error("Invalid credentials");
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
