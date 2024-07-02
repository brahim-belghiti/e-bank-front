import { TAccountData, TAddAccount } from "@/types/account.types";

export default class AccountServices {
  static API_URL = import.meta.env.VITE_API_URL;

  static async getAccounts() {
    try {
      const response = await fetch(`${AccountServices.API_URL}/api/accounts`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch accounts:", error);
      throw error;
    }
  }

  static async addAccount(account: TAddAccount) {
    try {
      const response = await fetch(`${AccountServices.API_URL}/api/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to add account:", error);
      throw error;
    }
  }

  static async deleteAccount(id: number | null): Promise<void> {
    try {
      const response = await fetch(`${AccountServices.API_URL}/api/accounts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete account. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to delete account:", error);
      throw error;
    }
  }
  static async updateAccount(account: Pick<TAccountData, "balance" | "status" | "id">) {
    try {
      const response = await fetch(`${AccountServices.API_URL}/api/accounts/${account.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });
      if (!response.ok) {
        // throw new Error(`Failed to edit account. Status: ${response.status}`);
        return response.status;
      }
    } catch (error) {
      console.error("Failed to edit account:", error);
      throw error;
    }
  }
}
