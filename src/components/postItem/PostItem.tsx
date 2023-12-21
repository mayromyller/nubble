import React from 'react'

import { Post } from '@domain'

import { Box } from '@components'

import { PostAction } from './PostActions'
import { PostBottom } from './PostBottom'
import { PostHeader } from './PostHeader'
import { PostImage } from './PostImage'

interface Props {
  post: Post
}

export function PostItem({ post }: Props) {
  return (
    <Box marginBottom="s24">
      <Box paddingHorizontal="s24">
        <PostHeader author={post.author} />
      </Box>

      <PostImage imageURL={post.imageURL} />

      <Box paddingHorizontal="s24">
        <PostAction
          commentCount={post.commentCount}
          favoriteCount={post.favoriteCount}
          reactionCount={post.reactionCount}
        />
        <PostBottom
          author={post.author}
          commentCount={post.commentCount}
          text={post.text}
          id={post.id}
        />
      </Box>
    </Box>
  )
}
