import React from 'react'
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon'
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon'
import { ThemeColors } from '../../theme/theme'
import { useAppTheme } from '../../hooks/useAppTheme'

export type IconBase = {
  size?: number
  color?: string
}

interface Props {
  name: IconName
  color?: ThemeColors
}

export function Icon({ name, color = 'backgroundContrast' }: Props) {
  const { colors } = useAppTheme()

  const SVGIcon = iconRegistry[name]

  return <SVGIcon color={colors[color]} />
}

const iconRegistry = {
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon
}

type IconType = typeof iconRegistry
type IconName = keyof IconType
