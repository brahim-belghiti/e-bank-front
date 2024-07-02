import { z } from "zod";

const transactiontValidation = z
  .object({
    iban: z.string({ required_error: "Le rib est requis" }).readonly(),
    motif: z.string({ required_error: "Le motif est requis" }),
    accountId: z.string({
      required_error: "Le compte est requis",
    }),
    amount: z.coerce.number({
      required_error: "Le montant est requis",
      invalid_type_error: "Le montant doit être un nombre",
    }),
    ibanToCredit: z.string({
      required_error: "Le rib du destinataire est requis",
    }),
  })
  .required();

export default transactiontValidation;
