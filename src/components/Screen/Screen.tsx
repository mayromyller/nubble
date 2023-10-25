import React from 'react'

import { Box } from '../box/box'

interface ScreenProps {
  children: React.ReactNode
}

export function Screen({ children }: ScreenProps) {
  return (
    <Box paddingHorizontal="s24" bg="grayWhite" flex={1}>
      {children}
    </Box>
  )
}
