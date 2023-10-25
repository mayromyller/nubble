import React from 'react'

import { Box } from '../box/box'
import { useSafeArea } from '../../hooks/useSafeArea'

interface ScreenProps {
  children: React.ReactNode
}

export function Screen({ children }: ScreenProps) {
  const { top } = useSafeArea()

  return (
    <Box
      paddingHorizontal="s24"
      bg="grayWhite"
      flex={1}
      style={{
        paddingTop: top
      }}>
      {children}
    </Box>
  )
}
