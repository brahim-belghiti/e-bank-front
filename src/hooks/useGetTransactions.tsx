import { useQuery } from "@tanstack/react-query";
// import TransactionServices from "@/api/transaction";
import { TRANSACTIONS } from "@/constants/fakedata";

export const useTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      // return await TransactionServices.getTransactions();
      return await TRANSACTIONS;
    },
  });
};
