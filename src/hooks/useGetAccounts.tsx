import { useQuery } from "@tanstack/react-query";
import AccountServices from "@/api/account";

export const useAccounts = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      return await AccountServices.getAccounts();
    },
  });
};
