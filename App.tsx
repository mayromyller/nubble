import React from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { theme } from './src/theme/theme'
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
