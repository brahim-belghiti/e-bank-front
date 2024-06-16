import { z } from "zod";

const customerValidation = z.object({
  firstname: z
    .string({ required_error: "Le prénom est requis" })
    .min(2, {
      message: "Le prénom doit comporter au moins 2 caractères.",
    })
    .max(50, {
      message: "Le prénom doit pas depasser 50 caractères",
    }),

  lastname: z
    .string({ required_error: "Le nom est requis" })
    .min(2, {
      message: "Le nom doit comporter au moins 2 caractères.",
    })
    .max(50, {
      message: "Le nom doit pas depasser 50 caractères",
    }),

  identityNumber: z
    .string({ required_error: "Le numero d'identité est requis" })
    .min(4, {
      message: "Le numero d'identité doit comporter au moins 4 caractères.",
    })
    .max(10, {
      message: "Le numero d'identité doit pas depasser 10 caractères",
    }),

  address: z
    .string({ required_error: "L'adresse est requise" })
    .min(4, {
      message: "L'adresse doit comporter au moins 4 caractères.",
    })
    .max(50, {
      message: "L'adresse doit pas depasser 50 caractères",
    }),

  email: z
    .string({ required_error: "L'adresse email est requise" })
    .email({
      message: "Adresse e-mail non valide.",
    })
    .max(50, {
      message: "Adresse e-mail ne doit pas depasser 50 caractères",
    }),

  dateOfBirth: z.date({ required_error: "La date de naissance est requise" }),
});

export { customerValidation };
