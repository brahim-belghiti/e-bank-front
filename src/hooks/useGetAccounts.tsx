import { useQuery } from "@tanstack/react-query";
// import AccountServices from "@/api/account";
import { BANK_ACCOUNTS } from "@/constants/fakedata";

export const useAccounts = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      // return await AccountServices.getAccounts();
      return await BANK_ACCOUNTS;
    },
  });
};
