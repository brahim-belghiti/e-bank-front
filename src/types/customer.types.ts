// type TCustomerData = {
//   id?: number;
//   firstname: string;
//   lastname: string;
//   username: string;
//   email: string;
//   identityNumber: string;
//   city: string;
//   codePostal: string;
//   phoneNumber: string;
//   address: string;
//   dateOfBirth: string;
//   createdAt?: string;
//   updatedAt?: string;
//   transactionsAsDestinataireIds?: number[];
//   transactionsAsSourceIds?: number[];
//   accountIds?: number[];
// };

type TCustomerData = {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  identityNumber: string;
};

type TAddNewCustomer = {
  firstname: string;
  lastname: string;
  identityNumber: string;
  dateOfBirth: string;
  address: string;
  email: string;
};

export type { TCustomerData, TAddNewCustomer };
