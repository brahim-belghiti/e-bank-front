import { TTransactionData } from "@/types/transaction.types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TTransactionData>[] = [
  {
    accessorKey: "motif",
    header: "Intitulé",
  },
  {
    accessorKey: "type",
    header: "type",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Montant",
  },
];
