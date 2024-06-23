import { TUserCredentials } from "@/types/user.type";

export default class AuthServices {
  static API_URL = import.meta.env.VITE_API_URL;

  static async authenticate(User: TUserCredentials) {
    const response = await fetch(`${AuthServices.API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    const data = await response.json();
    return data;
  }
}
