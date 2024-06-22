import { z } from "zod";

const passwordValidation = z.object({
  password: z.string(),
  confirmPassword: z.string(),
});

export default passwordValidation;
