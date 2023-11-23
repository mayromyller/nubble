import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AppStackParamList } from '../app/appStack.routes'
import { AppTabBottomTabParamList } from '../app/appTab.routes'
import { AuthStackParamList } from '../auth/authStack.routes'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabRouter'>
>
