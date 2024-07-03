type TTransactionData = {
  id: number;
  typeOperation: "Debit" | "Credit";
  dateOperation: Date;
  amount: number;
  motif: string;
  source: number;
  target: number;
};

export type { TTransactionData };
