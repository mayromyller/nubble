/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle
} from 'react-native'

import { Post, usePostList } from '@domain'
import { useScrollToTop } from '@react-navigation/native'

import { Screen, PostItem } from '@components'
import { AppTabScreenProps } from '@routes'

import { HomeEmpty } from './components/HomeEmpty'
import { HomeHeader } from './components/HomeHeader'

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const {
    list: postList,
    loading,
    error,
    refresh,
    fetchNextPage
  } = usePostList()

  const flatListRef = useRef<FlatList<Post>>(null)
  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        data={postList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={loading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refetch={refresh} />
        }
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
      />
    </Screen>
  )
}

const $screen: StyleProp<ViewStyle> = {
  paddingHorizontal: 0,
  paddingBottom: 0,
  paddingTop: 0,
  flex: 1
}
