import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { PostCommentScreen, SettingsScreen } from '@screens'

import { AppTabRouter } from './appTab.routes'

export type AppStackParamList = {
  AppTabRouter: undefined
  SettingsScreen: undefined
  PostCommentScreen: {
    postId: number
  }
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
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
    </Stack.Navigator>
  )
}
