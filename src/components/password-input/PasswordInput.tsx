import React, { useState } from 'react'

import { TextInput, TextInputProps, Icon } from '@components'

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>

export function PasswordInput(props: PasswordInputProps) {
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
