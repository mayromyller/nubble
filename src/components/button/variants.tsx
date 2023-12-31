import { TouchableOpacityBoxProps } from '@components'
import { ThemeColors } from '@theme'

import { ButtonVariant } from './button'

interface ButtonUI {
  container: TouchableOpacityBoxProps
  content: ThemeColors
}

export const buttonVariants: Record<
  ButtonVariant,
  {
    default: ButtonUI
    disabled: ButtonUI
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary'
      },
      content: 'primaryContrast'
    },
    disabled: {
      container: {
        backgroundColor: 'gray4'
      },
      content: 'gray2'
    }
  },

  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary'
      },
      content: 'primary'
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4'
      },
      content: 'gray2'
    }
  }
}
