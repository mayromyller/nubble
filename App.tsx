import React from 'react'

import { SafeAreaView } from 'react-native'
import { ThemeProvider } from '@shopify/restyle'

import { Text } from './src/components/text/text'

import { theme } from './src/theme/theme'
import { Icon } from './src/components/icons/icon'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" italic>
          NubbleApp Testing
        </Text>

        <Icon name="eyeOn" color="carrotSecondaryLight" />
        <Icon name="eyeOff" color="greenPrimary" />
      </SafeAreaView>
    </ThemeProvider>
  )
}
