type TTransactionData = {
  id: string;
  typeOperation: "Debit" | "Credit";
  dateOperation: string;
  amount: number;
  motif: string;
  account_id: string;
};

export type { TTransactionData };
