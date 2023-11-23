import React from 'react'

import { Button, Screen, Text } from '@components'
import { AppTabScreenProps } from '@routes'

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />

      <Button
        title="Favorite"
        mt="s10"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  )
}
