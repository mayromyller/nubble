import React from 'react'
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator
} from 'react-native'
import { ThemeColors } from '@theme'
import { useAppTheme } from '@hooks'

interface Props extends ActivityIndicatorProps {
  theme: ThemeColors
}

export function ActivityIndicator({ theme }: Props) {
  const { colors } = useAppTheme()
  return <RNActivityIndicator color={colors[theme]} />
}
