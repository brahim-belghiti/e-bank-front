import { TCustomerData } from "@/types/customer.type";

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

  static async addCustomer(customer: TCustomerData) {
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(`${API_URL}/api/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to add customer:", error);
      throw error;
    }
  }
}
