import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from '@components'
import { useSafeArea, useAppTheme } from '@hooks'

import {
  ScrollViewContainer,
  ViewContainer
} from './components/ScreenContainer'

export interface ScreenProps extends BoxProps {
  children: React.ReactNode
  canGoBack?: boolean
  scrollable?: boolean
  title?: string
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
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
              {title && <Box width={20} height={20} />}
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
