import React from 'react'
import { Image, Dimensions } from 'react-native'

import { Post } from '@domain'

type Props = Pick<Post, 'imageURL'>
export function PostImage({ imageURL }: Props) {
  return (
    <Image
      source={{ uri: imageURL }}
      style={{ width: Dimensions.get('window').width, height: 300 }}
    />
  )
}
