import React from 'react'

import { KeyboardAvoidingView, Platform } from 'react-native'

import { Box } from '../box/box'
import { useSafeArea } from '../../hooks/useSafeArea'
import { Icon } from '../icons/icon'
import { Text } from '../text/text'
import {
  ScrollViewContainer,
  ViewContainer
} from './components/ScreenContainer'
import { useAppTheme } from '../../hooks/useAppTheme'

interface ScreenProps {
  children: React.ReactNode
  canGoBack?: boolean
  scrollable?: boolean
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false
}: ScreenProps) {
  const { top, bottom } = useSafeArea()
  const { colors } = useAppTheme()

  const Container = scrollable ? ScrollViewContainer : ViewContainer

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          bg="grayWhite"
          flex={1}
          style={{
            paddingTop: top,
            paddingBottom: bottom
          }}>
          {canGoBack && (
            <Box mb="s24" flexDirection="row" gap="s8">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold>
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
