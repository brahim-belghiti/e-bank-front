type TAccountData = {
  id: string;
  activated: boolean;
  balance: number;
  status: "CREATED" | "ACTIVATED" | "SUSPENDED";
  iban: string;
  customerId: number;
};

type TAddAccount = {
  balance: number;
  status: "CREATED" | "ACTIVATED" | "SUSPENDED";
  iban: string;
  customerId: number;
};

export type { TAccountData, TAddAccount };
