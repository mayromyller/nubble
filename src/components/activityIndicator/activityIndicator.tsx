import React from 'react'
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator
} from 'react-native'

import { useAppTheme } from '@hooks'
import { ThemeColors } from '@theme'

interface Props extends ActivityIndicatorProps {
  theme: ThemeColors
}

export function ActivityIndicator({ theme }: Props) {
  const { colors } = useAppTheme()
  return <RNActivityIndicator color={colors[theme]} />
}
