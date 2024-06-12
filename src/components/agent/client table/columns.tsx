"use client";

import { TCustomerData } from "@/types/customer.type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TCustomerData>[] = [
  {
    accessorKey: "firstname",
    header: "Prénom",
  },
  {
    accessorKey: "lastname",
    header: "Nom",
  },
  {
    accessorKey: "email",
    header: "adresse mail",
  },
  {
    accessorKey: "phoneNumber",
    header: "Numéro de téléphone",
  },
];
