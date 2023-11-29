import { Post } from '@domain'

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components'

type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>
export function PostAction({
  commentCount,
  favoriteCount,
  reactionCount
}: Props) {
  function likePost() {}

  function navigateToComments() {}

  function favoritePost() {}

  return (
    <Box flexDirection="row" mt="s16" gap="s24">
      <Item
        marked
        onPress={likePost}
        text={reactionCount}
        icon={{
          default: 'heart',
          marked: 'heartFill'
        }}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        text={commentCount}
        icon={{
          default: 'comment',
          marked: 'comment'
        }}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        text={favoriteCount}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill'
        }}
      />
    </Box>
  )
}

interface ItemProps {
  onPress: () => void
  marked: boolean
  text: number
  icon: {
    default: IconProps['name']
    marked: IconProps['name']
  }
}

function Item({ onPress, marked, text, icon }: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  )
}
