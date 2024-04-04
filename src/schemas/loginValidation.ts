import { z } from "zod";

const formSchema = z.object({
  email: z
    .string({ required_error: "L'adresse email est requise" })
    .email({
      message: "Adresse e-mail non valide.",
    })
    .max(50, {
      message: "Adresse e-mail ne doit pas depasser 50 caractères",
    }),
  password: z.string({ required_error: 'Le mot de passe est requis' }).min(8, {
    message: "Le mot de passe doit comporter au moins 6 caractères.",
  }).max(50, {
    message: "Le mot de passe doit pas depasser 50 caractères"
  })
});

export { formSchema };
