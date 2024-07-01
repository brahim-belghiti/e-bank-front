import { useQuery } from "@tanstack/react-query";
// import CustomerServices from "@/api/customer";
import { CUSTOMERS } from "@/constants/fakedata";

export const useCustomers = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      // const customers = await CustomerServices.getCustomers();
      const customers = await CUSTOMERS;
      return customers;
    },
  });
};
