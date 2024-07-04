type TTransactionData = {
  id: number;
  typeOperation: "DEBIT" | "CREDIT";
  dateOperation: string;
  amount: number;
  motif: string;
  source: number;
  target: number;
};

export type { TTransactionData };
