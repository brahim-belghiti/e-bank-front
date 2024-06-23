import { useState } from "react";
import { TUserCredentials } from "@/types/user.type";
import AuthServices from "@/api/auth";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(true);

  const authenticate = async (credentials: TUserCredentials) => {
    try {
      const response = await AuthServices.authenticate(credentials);
      if (response?.status === 200) {
        await setAuthenticated(true);
      } else {
        console.error("Authentication error:");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  const unauthenticate = async () => {
    try {
      await setAuthenticated(false);
    } catch (error) {
      console.error("Unauthentication error:", error);
    }
  };

  const checkAuthentication = () => {
    return authenticated;
  };

  return { authenticate, unauthenticate, checkAuthentication };
};
