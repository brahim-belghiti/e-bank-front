import { Icons } from "@/components/Icons";

type TCustomerLinks = {
  title: string;
  href: string;
  icon: keyof typeof Icons;
};

type TCustomerData = {
  id?: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  identityNumber: string;
  city: string;
  codePostal: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: string;
  createdAt?: string;
  updatedAt?: string;
  transactionsAsDestinataireIds?: number[];
  transactionsAsSourceIds?: number[];
  accountIds?: number[];
};

export type { TCustomerLinks, TCustomerData };
