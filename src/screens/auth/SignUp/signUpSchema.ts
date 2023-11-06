import * as z from 'zod'

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim

export const signUpSchema = z.object({
  username: z
    .string({ required_error: 'Username obrigatório' })
    .regex(userNameRegex, 'Username inválido')
    .toLowerCase(),
  fullName: z
    .string()
    .min(5, 'Nome está curto')
    .max(50, 'O nome está longo')
    .transform(value =>
      value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    ),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve conter no mínimo 8 caracteres')
})

export type SignUpSchemaProps = z.infer<typeof signUpSchema>
