import React, { useState } from 'react'

import { TextInput, TextInputProps } from '../text-input/text-input'
import { Icon } from '../icons/icon'

type Props = Omit<TextInputProps, 'RightComponent'>

export function PasswordInput(props: Props) {
  const [isSecureTextEntry, setSecureTextEntry] = useState(true)

  function toggleSecureTextEntry() {
    setSecureTextEntry(prev => !prev)
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  )
}
