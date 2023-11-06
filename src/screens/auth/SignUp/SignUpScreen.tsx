import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { PasswordInput } from '../../../components/password-input/PasswordInput'
import { TextInput } from '../../../components/text-input/text-input'
import { Screen } from '../../../components/screen/Screen'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/text/text'
import { Box } from '../../../components/box/box'
import { RootStackParamList } from '../../../routes/routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess()
  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success'
      }
    })
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge">Criar uma conta</Text>

      <Box mt="s32" mb="s48" rowGap="s20">
        <TextInput label="Seu username" placeholder="@" />

        <TextInput label="Nome completo" placeholder="Digite seu nome" />

        <TextInput label="E-mail" placeholder="digite seu e-mail" />

        <PasswordInput label="Senha" placeholder="Digite sua senha" />
      </Box>

      <Button title="Criar um conta" onPress={submitForm} />
    </Screen>
  )
}
