import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AppStackRouter } from './appStack.routes'
import { AuthStackRouter } from './authStack.routes'

export function Router() {
  const isLogged = true
  return (
    <NavigationContainer>
      {isLogged ? <AppStackRouter /> : <AuthStackRouter />}
    </NavigationContainer>
  )
}
