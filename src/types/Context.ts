// Define the shape of the context data and functions
export interface ContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}
