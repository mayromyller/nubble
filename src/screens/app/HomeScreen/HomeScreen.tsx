/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle
} from 'react-native'

import { postService, Post } from '@domain'

import { Button, Screen, Text, PostItem } from '@components'
import { AppTabScreenProps } from '@routes'

import { HomeHeader } from './components/HomeHeader'

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostLit] = useState<Post[]>([])
  const { getList } = postService

  useEffect(() => {
    getList().then(list => setPostLit(list))
  }, [])

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        ListHeaderComponent={<HomeHeader />}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
}

const $screen: StyleProp<ViewStyle> = {
  paddingHorizontal: 0,
  paddingBottom: 0,
  paddingTop: 0
}
