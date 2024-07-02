import { z } from "zod";

const accountValidation = z.object({
  identityNumber: z.string().readonly(),
  iban: z.string(),
  status: z.enum(["ACTIVATED", "CREATED", "SUSPENDED"]),
  balance: z.number(),
});

export default accountValidation;
