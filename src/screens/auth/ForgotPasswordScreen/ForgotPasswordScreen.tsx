import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, FormTextInput, Screen, Text } from '@components'

import { RootStackParamList } from '@routes'

import { useResetNavigationSuccess } from '@hooks'

import {
  ForgotPasswordSchema,
  forgotPasswordSchema
} from './forgotPasswordSchema'

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { control, handleSubmit, formState } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
    mode: 'onChange'
  })

  const { reset } = useResetNavigationSuccess()
  function submitForm(data: ForgotPasswordSchema) {
    console.log(data.email)
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary'
      }
    })
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>

      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />

      <Button
        disabled={!formState.isValid}
        title="Recuperar senha"
        mt="s48"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  )
}
