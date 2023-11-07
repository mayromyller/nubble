import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../../../components/button/button'
import { Screen } from '../../../components/screen/Screen'
import { Text } from '../../../components/text/text'
import { RootStackParamList } from '../../../routes/routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import {
  ForgotPasswordSchema,
  forgotPasswordSchema
} from './forgotPassordSchema'
import { FormTextInput } from '../../../components/form/form-text-input/FormTextInput'

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
