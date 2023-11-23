import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IconProps } from '../../components/icons/icon'
import { ForgotPasswordScreen } from '../../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen'
import { LoginScreen } from '../../screens/auth/LoginScreen/LoginScreen'
import { SignUpScreen } from '../../screens/auth/SignUp/SignUpScreen'
import { SuccessScreen } from '../../screens/auth/Success/SuccessScreen'

export type AuthStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
  SuccessScreen: {
    title: string
    description: string
    icon: Pick<IconProps, 'name' | 'color'>
  }
  ForgotPasswordScreen: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthStackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  )
}
