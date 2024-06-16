import { z } from "zod";

const accountValidation = z.object({
  identityNumber: z.string(),
  rib: z.string(),
});

export default accountValidation;
