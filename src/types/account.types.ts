import { TCustomerData } from "./customer.types";

type TAccountData = {
  id: string;
  activated: boolean;
  balance: number;
  status: "CREATED" | "ACTIVATED" | "SUSPENDED";
  iban: string;
  customer: TCustomerData;
};

export type { TAccountData };
