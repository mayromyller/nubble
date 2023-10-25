import React from 'react'

import { PasswordInput } from '../../../components/password-input/PasswordInput'
import { TextInput } from '../../../components/text-input/text-input'
import { Screen } from '../../../components/screen/Screen'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/text/text'
import { Box } from '../../../components/box/box'

export function SignUp() {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge">Criar uma conta</Text>

      <Box mt="s32" mb="s48" rowGap="s20">
        <TextInput label="Seu username" placeholder="@" />

        <TextInput label="Nome completo" placeholder="Digite seu nome" />

        <TextInput label="E-mail" placeholder="digite seu e-mail" />

        <PasswordInput label="Senha" placeholder="Digite sua senha" />
      </Box>

      <Button title="Criar um conta" />
    </Screen>
  )
}
