import { Post } from '@domain'
import { useNavigation } from '@react-navigation/native'

import { Box, Text } from '@components'

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>
export function PostBottom({ author, text, commentCount, id }: Props) {
  const commentText = getCommentText(commentCount)

  const navigation = useNavigation()

  function navigateToPostComment() {
    navigation.navigate('PostCommentScreen', { postId: id })
  }

  return (
    <Box mt="s16">
      <Text preset="paragraphSmall" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text
          onPress={navigateToPostComment}
          preset="paragraphSmall"
          bold
          color="primary"
          mt="s8">
          {commentText}
        </Text>
      )}
    </Box>
  )
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null
  } else if (commentCount === 1) {
    return 'ver comentário'
  } else {
    return `ver ${commentCount} comentários`
  }
}
