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
}
