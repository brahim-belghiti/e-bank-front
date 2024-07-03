import { z } from "zod";

const transactiontValidation = z
  .object({
    motif: z
      .string({ required_error: "Le motif est requis" })
      .min(1, { message: "Le motif est requis" }),
    amount: z.coerce.number({
      required_error: "Le montant est requis",
      invalid_type_error: "Le montant doit être un nombre",
    }),
    source: z
      .string({
        required_error: "Le rib du compte source est requis",
      })
      .min(1, { message: "Le rib du compte source est requis" }),
    target: z
      .string({
        required_error: "Le rib du destinataire est requis",
      })
      .min(1, { message: "Le rib du destinataire est requis" }),
    typeOperation: z.enum(["DEBIT", "CREDIT"]),
    dateOperation: z.date({
      required_error: "Le date est requise",
    }),
  })
  .required();

export default transactiontValidation;
