import React from 'react'

import { Screen } from '../../../components/screen/Screen'
import { Icon } from '../../../components/icons/icon'
import { Text } from '../../../components/text/text'
import { Button } from '../../../components/button/button'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({ route, navigation }: ScreenProps) {
  function goBackToBegin() {
    navigation.navigate('LoginScreen')
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />

      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>

      <Button title="Voltar ao início" onPress={goBackToBegin} mt="s40" />
    </Screen>
  )
}
