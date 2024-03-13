import { z } from "zod"

export const formSchemaLogin = z.object({
    email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Forneça um email válido"),
    password: z
    .string()
    .min(1,"Senha é obrigatório"),
})

export const formSchemaRegister = z.object({
    name: z
    .string()
    .min(1, "Nome é obrigatório"),
    email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Forneça um email válido"),
    password: z
    .string()
    // .min(8, "É necessário ter pelo menos 8 caracteres")
    // .regex(/(?=.*[A-Z])/, "É necessário conter pelo menos uma letra maiúscula")
    // .regex(/(?=.*[a-z])/, "É necessário conter pelo menos uma letra minúscula")
    // .regex(/(?=.*[0-9])/, "É necessário conter pelo menos um número")
    // .regex(/(?=.*[!@#$%^&*])/, "É necessário conter pelo menos um caractere especial")
    ,
    confirmPassword: z
    .string()
    .min(1, "É necessário confirmar a senha"),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"],
    })

    export const formSchemaEditProduct = z.object({
        name: z
        .string()
        .max(50, "Maximo de 50 caractéres")
        .min(1, "Nome é obrigatório"),
        price: z
        .coerce.number({
            invalid_type_error: "Precisa ser um número",
        })
        .min(1,"Preço é obrigatório"),
        image: z
        .string()
        .min(1,"Imagem é obrigatória"),
        description: z
        .string()
        .min(1,"Descrição é obrigatória"),
    })

    export const formSchemaCreateProduct = z.object({
        name: z
        .string()
        .max(50, "Maximo de 50 caractéres")
        .min(1, "Nome é obrigatório"),
        price: z
        .coerce.number({
            invalid_type_error: "Precisa ser um número",
        })
        .min(1,"Preço é obrigatório"),
        image: z
        .string()
        .min(1,"Imagem é obrigatória"),
        description: z
        .string()
        .min(1,"Descrição é obrigatória"),
    })