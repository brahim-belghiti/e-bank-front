export default class CustomerServices {
  static async getCustomers() {
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(`${API_URL}/api/customers`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch customers:", error);
      throw error;
    }
  }
}
