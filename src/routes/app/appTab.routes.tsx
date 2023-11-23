import {
  BottomTabBarProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'

import {
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
  FavoriteScreen
} from '@screens'

import { AppTabBar } from './AppTabBar/AppTabBar'

export type AppTabBottomTabParamList = {
  HomeScreen: undefined
  NewPostScreen: undefined
  FavoriteScreen: undefined
  MyProfileScreen: undefined
}

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>()

export function AppTabRouter() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  )
}
