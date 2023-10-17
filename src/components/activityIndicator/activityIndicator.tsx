import React from 'react'
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator
} from 'react-native'
import { Theme, ThemeColors } from '../../theme/theme'
import { useTheme } from '@shopify/restyle'

interface Props extends ActivityIndicatorProps {
  theme: ThemeColors
}

export function ActivityIndicator({ theme }: Props) {
  const { colors } = useTheme<Theme>()
  return <RNActivityIndicator color={colors[theme]} />
}
