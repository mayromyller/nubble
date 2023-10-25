import React, { useRef } from 'react'

import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
  Pressable
} from 'react-native'

import { Box, BoxProps } from '../box/box'
import { $fontFamily, $fontSizes, Text } from '../text/text'
import { useAppTheme } from '../../hooks/useAppTheme'

export interface TextInputProps extends RNTextInputProps {
  label: string
  errorMessage?: string
  RightComponent?: React.ReactElement
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  ...rnTextInputProps
}: TextInputProps) {
  const { colors } = useAppTheme()
  const inputRef = useRef<RNTextInput>(null)
  const focusInput = () => inputRef.current?.focus()

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12'
  }

  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text preset="paragraphMedium" marginBottom="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={[
              $textInputStyle,
              {
                color: colors.grayBlack
              }
            ]}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Box>
    </Pressable>
  )
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium
}
