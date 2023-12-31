import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from '@components'
import { useSafeArea, useAppTheme } from '@hooks'

import {
  ScrollViewContainer,
  ViewContainer
} from './components/ScreenContainer'

interface ScreenProps extends BoxProps {
  children: React.ReactNode
  canGoBack?: boolean
  scrollable?: boolean
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useSafeArea()
  const { colors } = useAppTheme()

  const Container = scrollable ? ScrollViewContainer : ViewContainer
  const navigation = useNavigation()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom
            },
            style
          ]}
          {...boxProps}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row"
              gap="s8">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold>
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
