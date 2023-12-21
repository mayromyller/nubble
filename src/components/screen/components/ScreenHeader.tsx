import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Box, Icon, TouchableOpacityBox, Text } from '@components'

import { ScreenProps } from '../Screen'

const ICON_SIZE = 20

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>

export function ScreenHeader({ title, canGoBack }: Props) {
  const navigation = useNavigation()

  return (
    <Box>
      {canGoBack && (
        <Box justifyContent="space-between" flexDirection="row">
          <TouchableOpacityBox
            onPress={navigation.goBack}
            mb="s24"
            flexDirection="row"
            gap="s8">
            <Icon name="arrowLeft" color="primary" />
            {!title && (
              <Text preset="paragraphMedium" semiBold>
                Voltar
              </Text>
            )}
          </TouchableOpacityBox>
          {title && <Text preset="headingSmall">{title}</Text>}
          {title && <Box width={ICON_SIZE} />}
        </Box>
      )}
    </Box>
  )
}
