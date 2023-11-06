/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Screen } from '../../../components/screen/Screen'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/text/text'
import { Box } from '../../../components/box/box'
import { RootStackParamList } from '../../../routes/routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { FormTextInput } from '../../../components/form/form-text-input/FormTextInput'
import { FormPasswordTextInput } from '../../../components/form/form-text-input/FormPasswordTextInput'

import { SignUpSchemaProps, signUpSchema } from './signUpSchema'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

export function SignUpScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<SignUpSchemaProps>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  })
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

  function onSubmit(data: SignUpSchemaProps) {
    console.log(data)
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge">Criar uma conta</Text>

      <Box mt="s32" mb="s48" rowGap="s20">
        <FormTextInput
          control={control}
          name="username"
          label="Seu username"
          placeholder="@"
          autoCapitalize="none"
        />

        <FormTextInput
          control={control}
          name="fullName"
          label="Nome completo"
          placeholder="Digite seu nome"
          autoCapitalize="words"
        />

        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="digite seu e-mail"
          autoCapitalize="none"
        />

        <FormPasswordTextInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>

      <Button
        disabled={!formState.isValid}
        title="Criar um conta"
        onPress={handleSubmit(onSubmit)}
      />
    </Screen>
  )
}
