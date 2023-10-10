import React from 'react'

import { SafeAreaView } from 'react-native'
import { Text } from './src/components/text/text'

export default function App() {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" italic>
        NubbleApp Testing
      </Text>
    </SafeAreaView>
  )
}
