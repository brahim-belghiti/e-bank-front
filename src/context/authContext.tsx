import React, { createContext } from "react";
import { useAuth } from "@/hooks/useAuth";
import { TUserCredentials } from "@/types/user.type";

// Define the context type
export interface AuthContextType {
  authenticate: (credentials: TUserCredentials) => Promise<void>;
  unauthenticate: () => Promise<void>;
  checkAuthentication: () => boolean;
}

// Create the context
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { authenticate, unauthenticate, checkAuthentication } = useAuth();

  // Provide the context value
  const authContextValue: AuthContextType = {
    authenticate,
    unauthenticate,
    checkAuthentication,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

// Export the context to be used in the custom hook
export { AuthContext };
