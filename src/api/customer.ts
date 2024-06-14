import { TCustomerData } from "@/types/customer.type";

export default class CustomerServices {
  static API_URL = import.meta.env.VITE_API_URL;

  static async getCustomers() {
    try {
      const response = await fetch(`${CustomerServices.API_URL}/api/customers`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch customers:", error);
      throw error;
    }
  }

  static async addCustomer(customer: TCustomerData) {
    try {
      const response = await fetch(`${CustomerServices.API_URL}/api/customers`, {
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

  static async deleteCustomer(id: number | null): Promise<void> {
    try {
      const response = await fetch(`${CustomerServices.API_URL}/api/customers/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete customer. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to delete customer:", error);
      throw error;
    }
  }
}
