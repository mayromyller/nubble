/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'

import { Screen } from '../../../components/screen/Screen'
import { Button } from '../../../components/button/button'
import { Text } from '../../../components/text/text'
import { Box } from '../../../components/box/box'
import { RootStackParamList } from '../../../routes/routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { FormTextInput } from '../../../components/form/form-text-input/FormTextInput'
import { FormPasswordTextInput } from '../../../components/form/form-text-input/FormPasswordTextInput'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

type FormSignUpScreen = {
  username: string
  name: string
  email: string
  password: string
}

export function SignUpScreen({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<FormSignUpScreen>({
    defaultValues: {
      username: '',
      name: '',
      email: '',
      password: ''
    }
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

  function onSubmit(data: FormSignUpScreen) {
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
          rules={{ required: 'Username obrigatório' }}
        />

        <FormTextInput
          control={control}
          name="name"
          label="Nome completo"
          placeholder="Digite seu nome"
          autoCapitalize="words"
        />

        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="digite seu e-mail"
          autoCapitalize="words"
        />

        <FormPasswordTextInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          rules={{
            required: 'Senha obrigatória',
            minLength: {
              value: 8,
              message: 'Senha deve conter no mínimo 8 caracteres'
            }
          }}
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
