import React from 'react'

import { View } from 'react-native'

import { TextInput } from '../../../components/text-input/text-input'
import { Button } from '../../../components/button/button'
import { Icon } from '../../../components/icons/icon'
import { Text } from '../../../components/text/text'
import { Box } from '../../../components/box/box'
import { Screen } from '../../../components/Screen/Screen'

export function LoginScreen() {
  return (
    <Screen>
      <View>
        <Text preset="headingLarge" mb="s8">
          Olá!
        </Text>
        <Text preset="paragraphLarge">
          Digite seu e-mail e senha para entrar
        </Text>

        <Box mt="s40">
          <Box mb="s16">
            <TextInput
              errorMessage="Mensagem de erro"
              label="E-mail"
              placeholder="Digite seu e-mail"
            />
          </Box>

          <Box>
            <TextInput
              label="Senha"
              placeholder="Digite sua senha"
              RightComponent={<Icon name="eyeOn" color="gray2" />}
            />
          </Box>

          <Text preset="paragraphSmall" mt="s8" color="primary">
            Esqueci minha senha
          </Text>
        </Box>

        <Box rowGap="s12" mt="s48">
          <Button title="Entrar" />
          <Button title="Criar uma conta" variant="outline" />
        </Box>
      </View>
    </Screen>
  )
}
