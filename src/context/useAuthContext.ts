import { useContext } from "react";
import { AuthContext, AuthContextType } from "./authContext";

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
