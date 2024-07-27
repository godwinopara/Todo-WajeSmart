import { createContext, ReactNode, useEffect, useState } from "react";
// import { SECRET_KEY } from "../config";
import { ContextProps } from "../types/Context";
import { DecodedToken } from "../types/Jwt";
import { jwtDecode } from "jwt-decode";
import { generateFakeJWT } from "../utils/generateFakeJWT";

export const AppContext = createContext<ContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("token");
        }
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
  }, []);

  // Function to handle user login
  const login = (username: string, password: string) => {
    // Simulate user verification
    if (username === "user" && password === "password") {
      const token = generateFakeJWT({ username });
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } else {
      console.error("Invalid credentials");
      return;
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
