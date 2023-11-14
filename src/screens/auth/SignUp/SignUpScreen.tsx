/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Box,
  Button,
  FormTextInput,
  FormPasswordTextInput,
  Screen,
  Text
} from '@components'
import { useResetNavigationSuccess } from '@hooks'
import { AuthScreenProps } from '@routes'

import { SignUpSchemaProps, signUpSchema } from './signUpSchema'

export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
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
