import { TTransactionData } from "@/types/transaction.types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TTransactionData>[] = [
  {
    accessorKey: "motif",
    header: "Intitulé",
  },
  {
    accessorKey: "typeOperation",
    header: "type",
  },
  {
    accessorKey: "dateOperation",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Montant",
  },
];
