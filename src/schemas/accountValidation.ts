import { z } from "zod";

const accountValidation = z.object({
  identityNumber: z.string(),
  iban: z.string(),
});

export default accountValidation;
