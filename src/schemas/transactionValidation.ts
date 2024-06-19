import { z } from "zod";

const accountValidation = z.object({
  rib: z.string(),
  motif: z.string(),
  accountId: z.string(),
  amount: z.number(),
  ribToCredit: z.string(),
});

export default accountValidation;
