import React from 'react'
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../box/box'
import { Text } from '../text/text'
import { buttonVariants } from './variants'
import { ActivityIndicator } from '../activityIndicator/activityIndicator'

export type ButtonVariant = 'primary' | 'outline'

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string
  loading?: boolean
  variant?: ButtonVariant
  disabled?: boolean
}

export function Button({
  title,
  loading,
  variant = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonVariant =
    buttonVariants[variant][disabled ? 'disabled' : 'default']

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonVariant.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator theme={buttonVariant.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonVariant.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  )
}
