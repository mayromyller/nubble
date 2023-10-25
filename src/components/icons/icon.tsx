import React from 'react'

import { Pressable } from 'react-native'

import { EyeOffIcon } from '../../assets/icons/EyeOffIcon'
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon'
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon'
import { ThemeColors } from '../../theme/theme'
import { useAppTheme } from '../../hooks/useAppTheme'

export type IconBase = {
  size?: number
  color?: string
}

interface Props {
  name: IconName
  color?: ThemeColors
  onPress?: () => void
}

export function Icon({ name, color = 'backgroundContrast', onPress }: Props) {
  const { colors } = useAppTheme()

  const SVGIcon = iconRegistry[name]

  if (onPress) {
    return (
      <Pressable
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
        hitSlop={10}
        onPress={onPress}>
        <SVGIcon color={colors[color]} />
      </Pressable>
    )
  }

  return <SVGIcon color={colors[color]} />
}

const iconRegistry = {
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  arrowLeft: ArrowLeftIcon
}

type IconType = typeof iconRegistry
type IconName = keyof IconType
