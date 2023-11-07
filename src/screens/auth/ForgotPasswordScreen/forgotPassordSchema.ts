import * as z from 'zod'

export const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: 'E-mail obrigatório' })
    .email('E-mail inválido')
})

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>
