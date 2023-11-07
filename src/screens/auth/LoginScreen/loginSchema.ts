import * as z from 'zod'

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email obrigatório' })
    .email('Email inválido'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres')
})

export type LoginSchema = z.infer<typeof loginSchema>
