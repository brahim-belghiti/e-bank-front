import { z } from "zod";

const editAccoutValidation = z.object({
  iban: z.string().readonly(),
  status: z.enum(["ACTIVATED", "CREATED", "SUSPENDED"]),
  balance: z.number(),
});

export default editAccoutValidation;
