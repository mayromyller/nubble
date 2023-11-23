import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SettingsScreen } from '@screens'

import { AppTabRouter } from './appTab.routes'

export type AppStackParamList = {
  AppTabRouter: undefined
  SettingsScreen: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export function AppStackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="AppTabRouter"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true
      }}>
      <Stack.Screen name="AppTabRouter" component={AppTabRouter} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}
