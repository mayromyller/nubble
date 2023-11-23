import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { Box, Icon, TouchableOpacityBox, Text } from '@components'
import { useSafeArea } from '@hooks'
import { $shadowProps } from '@theme'

import { AppTabBottomTabParamList } from '../appTab.routes'

import { mapTabBarProps } from './mapTabBarProps'

export function AppTabBar({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) {
  const { bottom } = useSafeArea()
  return (
    <Box
      flexDirection="row"
      paddingTop="s12"
      backgroundColor="background"
      style={[
        {
          paddingBottom: bottom
        },
        $shadowProps
      ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const tabItem =
          mapTabBarProps[route.name as keyof AppTabBottomTabParamList]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <TouchableOpacityBox
            key={route.name}
            activeOpacity={1}
            alignItems="center"
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text
              preset="paragraphCaption"
              semiBold
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        )
      })}
    </Box>
  )
}
