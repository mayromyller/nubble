import { ThemeColors } from '../../theme/theme'
import { TouchableOpacityBoxProps } from '../box/box'
import { ButtonVariant } from './button'

interface ButtonUI {
  container: TouchableOpacityBoxProps
  content: ThemeColors
}

export const buttonVariants: Record<ButtonVariant, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary'
    },
    content: 'primaryContrast'
  },

  outline: {
    container: {
      borderWidth: 1,
      borderColor: 'primary'
    },
    content: 'primary'
  },

  secondary: {
    container: {
      backgroundColor: 'carrotSecondary'
    },
    content: 'primaryContrast'
  }
}
