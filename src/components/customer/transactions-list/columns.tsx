import { cn } from "@/lib/utils";
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
    cell: ({ row }) => (
      <div
        className={cn(
          "font-bold",
          row.getValue("typeOperation") === "DEBIT" ? "text-red-400" : "text-green-400",
        )}
      >
        {row.getValue("typeOperation")}
      </div>
    ),
  },
  {
    accessorKey: "dateOperation",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Montant",
    cell: ({ row }) => (
      <div
        className={cn(
          "font-bold",
          row.getValue("typeOperation") === "DEBIT" ? "text-red-400" : "text-green-400",
        )}
      >
        <span className="px-1">{row.getValue("typeOperation") === "DEBIT" ? "-" : "+"}</span>
        {row.getValue("amount")}
      </div>
    ),
  },
];
