import React from 'react'

import { Screen, Text } from '@components'
import { AppScreenProps } from '@routes'

export function PostCommentScreen({
  route
}: AppScreenProps<'PostCommentScreen'>) {
  console.log(route.params.postId)
  return (
    <Screen canGoBack title="Comentários">
      <Text preset="paragraphLarge">Screen de comentários</Text>
    </Screen>
  )
}
