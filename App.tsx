import React from 'react'

import { SafeAreaView, View } from 'react-native'
import { ThemeProvider } from '@shopify/restyle'

import { Text } from './src/components/text/text'

import { Box } from './src/components/box/box'
import { theme } from './src/theme/theme'
import { Button } from './src/components/button/button'
import { TextInput } from './src/components/text-input/text-input'
import { Icon } from './src/components/icons/icon'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
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
      </SafeAreaView>
    </ThemeProvider>
  )
}
