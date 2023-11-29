import { SimpleLogo } from '@brand'

import { Box, BoxProps, Icon } from '@components'
import { useSafeArea } from '@hooks'

export function HomeHeader() {
  const { top } = useSafeArea()

  return (
    <Box {...$wrapper} style={{ paddingTop: top }}>
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="comment" />
      </Box>
    </Box>
  )
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24'
}
