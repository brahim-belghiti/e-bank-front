import { Checkbox } from "@/components/ui/checkbox";
import { TAccountData } from "@/types/account.types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TAccountData>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customer.email",
    header: "email",
  },
  {
    accessorKey: "status",
    header: "status du compte",
  },
  {
    accessorKey: "balance",
    header: "balance du compte",
  },
];
