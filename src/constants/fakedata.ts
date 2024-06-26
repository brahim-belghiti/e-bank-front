import { TAccountData } from "@/types/account.types";
import { TCustomerData } from "@/types/customer.types";
import { TTransactionData } from "@/types/transaction.types";

const CUSTOMERS: TCustomerData[] = [
  {
    id: "1",
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    identityNumber: "ad1",
  },
  {
    id: "2",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    identityNumber: "ad2",
  },
  {
    id: "3",
    firstname: "Michael",
    lastname: "Johnson",
    email: "michael.johnson@example.com",
    identityNumber: "ad3",
  },
  {
    id: "4",
    firstname: "Emily",
    lastname: "Davis",
    email: "emily.davis@example.com",
    identityNumber: "ad4",
  },
  {
    id: "5",
    firstname: "David",
    lastname: "Brown",
    email: "david.brown@example.com",
    identityNumber: "ad5",
  },
];

const BANK_ACCOUNTS: TAccountData[] = [
  {
    id: "ACC001",
    activated: true,
    balance: 1000.0,
    status: "ACTIVATED",
    iban: "DE89 3704 0044 0532 0130 00",
    customer: {
      id: "1",
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      identityNumber: "ad1",
    },
  },
  {
    id: "ACC002",
    activated: false,
    balance: 2500.5,
    status: "SUSPENDED",
    iban: "FR14 2004 1010 0505 0001 3M02 606",
    customer: {
      id: "2",
      firstname: "Jane",
      lastname: "Smith",
      email: "jane.smith@example.com",
      identityNumber: "ad2",
    },
  },
  {
    id: "ACC003",
    activated: true,
    balance: 500.75,
    status: "CREATED",
    iban: "GB82 WEST 1234 5698 7654 32",
    customer: {
      id: "3",
      firstname: "Michael",
      lastname: "Johnson",
      email: "michael.johnson@example.com",
      identityNumber: "ad3",
    },
  },
  {
    id: "ACC004",
    activated: false,
    balance: 1250.0,
    status: "ACTIVATED",
    iban: "ES91 2100 0418 4502 0005 1332",
    customer: {
      id: "4",
      firstname: "Emily",
      lastname: "Davis",
      email: "emily.davis@example.com",
      identityNumber: "ad4",
    },
  },
  {
    id: "ACC005",
    activated: true,
    balance: 3000.0,
    status: "CREATED",
    iban: "IT60 X054 2811 1010 0000 0123 456",
    customer: {
      id: "5",
      firstname: "David",
      lastname: "Brown",
      email: "david.brown@example.com",
      identityNumber: "ad5",
    },
  },
];

const TRANSACTIONS: TTransactionData[] = [
  {
    id: "TXN001",
    typeOperation: "Debit",
    dateOperation: "2024-01-01",
    amount: 200.0,
    motif: "Payment for services",
    account_id: "ACC001",
  },
  {
    id: "TXN002",
    typeOperation: "Credit",
    dateOperation: "2024-01-05",
    amount: 500.0,
    motif: "Salary",
    account_id: "ACC002",
  },
  {
    id: "TXN003",
    typeOperation: "Debit",
    dateOperation: "2024-01-10",
    amount: 150.0,
    motif: "Grocery shopping",
    account_id: "ACC003",
  },
  {
    id: "TXN004",
    typeOperation: "Credit",
    dateOperation: "2024-01-15",
    amount: 1200.0,
    motif: "Freelance payment",
    account_id: "ACC004",
  },
  {
    id: "TXN005",
    typeOperation: "Debit",
    dateOperation: "2024-01-20",
    amount: 300.0,
    motif: "Utility bill",
    account_id: "ACC005",
  },
  {
    id: "TXN005",
    typeOperation: "Debit",
    dateOperation: "2024-01-20",
    amount: 300.0,
    motif: "Utility bill",
    account_id: "ACC005",
  },
  {
    id: "TXN006",
    typeOperation: "Debit",
    dateOperation: "2024-02-01",
    amount: 50.0,
    motif: "Coffee shop",
    account_id: "ACC001",
  },
  {
    id: "TXN007",
    typeOperation: "Credit",
    dateOperation: "2024-02-05",
    amount: 750.0,
    motif: "Bonus",
    account_id: "ACC002",
  },
  {
    id: "TXN008",
    typeOperation: "Debit",
    dateOperation: "2024-02-10",
    amount: 100.0,
    motif: "Dinner",
    account_id: "ACC003",
  },
  {
    id: "TXN009",
    typeOperation: "Credit",
    dateOperation: "2024-02-15",
    amount: 600.0,
    motif: "Project payment",
    account_id: "ACC004",
  },
  {
    id: "TXN010",
    typeOperation: "Debit",
    dateOperation: "2024-02-20",
    amount: 400.0,
    motif: "Rent",
    account_id: "ACC005",
  },
];
export { CUSTOMERS, BANK_ACCOUNTS, TRANSACTIONS };
