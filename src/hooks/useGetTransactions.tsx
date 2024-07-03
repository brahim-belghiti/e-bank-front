import { useQuery } from "@tanstack/react-query";
import TransactionServices from "@/api/transaction";

export const useTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      return await TransactionServices.getTransactions();
    },
  });
};
