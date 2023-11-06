import React from 'react'

import { View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { PasswordInput } from '../../../components/password-input/PasswordInput'
import { TextInput } from '../../../components/text-input/text-input'
import { Screen } from '../../../components/screen/Screen'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/text/text'
import { Box } from '../../../components/box/box'
import { RootStackParamList } from '../../../routes/routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {
  function navigateToSignUp() {
    navigation.navigate('SignUpScreen')
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen')
  }

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
            <TextInput label="E-mail" placeholder="Digite seu e-mail" />
          </Box>

          <Box>
            <PasswordInput label="Senha" placeholder="Digite sua senha" />
          </Box>

          <Text
            preset="paragraphSmall"
            bold
            mt="s8"
            color="primary"
            onPress={navigateToForgotPasswordScreen}>
            Esqueci minha senha
          </Text>
        </Box>

        <Box rowGap="s12" mt="s48">
          <Button title="Entrar" />
          <Button
            title="Criar uma conta"
            variant="outline"
            onPress={navigateToSignUp}
          />
        </Box>
      </View>
    </Screen>
  )
}
