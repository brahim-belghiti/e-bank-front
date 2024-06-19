type TTransactionData = {
  id: string;
  typeOperation: "Debit" | "Credit";
  dateOperation: string;
  amount: number;
  motif: string;
};

export type { TTransactionData };
