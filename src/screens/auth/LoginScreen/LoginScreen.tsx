import React from 'react'
import { Alert, View } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'

import {
  Box,
  Screen,
  Button,
  Text,
  FormTextInput,
  FormPasswordTextInput
} from '@components'
import { RootStackParamList } from '@routes'

import { LoginSchema, loginSchema } from './loginSchema'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  function submitForm(data: LoginSchema) {
    Alert.alert(`Email: ${data.email} senha: ${data.password}`)
  }

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
            <FormTextInput
              control={control}
              name="email"
              label="E-mail"
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
            />
          </Box>

          <Box>
            <FormPasswordTextInput
              control={control}
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
            />
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
          <Button
            disabled={!formState.isValid}
            title="Entrar"
            onPress={handleSubmit(submitForm)}
          />
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
