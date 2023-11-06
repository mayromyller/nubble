import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '../../../components/button/button'
import { Screen } from '../../../components/screen/Screen'
import { TextInput } from '../../../components/text-input/text-input'
import { Text } from '../../../components/text/text'
import { RootStackParamList } from '../../../routes/routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess()
  function submitForm() {
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

      <TextInput label="E-mail" placeholder="Digite seu e-mail" />

      <Button title="Recuperar senha" mt="s48" onPress={submitForm} />
    </Screen>
  )
}
