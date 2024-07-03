import { TTransactionData } from "@/types/transaction.types";

export default class TransactionServices {
  static API_URL = import.meta.env.VITE_API_URL;

  static async getTransactions() {
    try {
      const response = await fetch(`${TransactionServices.API_URL}/api/transactions`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
      throw error;
    }
  }

  static async addTransaction(transaction: Omit<TTransactionData, "id">) {
    try {
      const response = await fetch(`${TransactionServices.API_URL}/api/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("erreur d'ajouter une transaction:", error);
      throw error;
    }
  }
}
