import { useQuery } from "@tanstack/react-query";
import CustomerServices from "@/api/customer";

export const useCustomers = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const customers = await CustomerServices.getCustomers();
      return customers;
    },
  });
};
