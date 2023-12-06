import { useState, useEffect } from 'react'

import { Post, postService } from '@domain'

export function usePostList() {
  const [postList, setPostLit] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean | null>(null)
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  async function fetchInitialData() {
    try {
      setError(null)
      setLoading(true)
      const { data, meta } = await postService.getList(1)
      setPostLit(data)
      if (meta.hasNextPage) {
        setPage(2)
      } else {
        setHasNextPage(false)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      return
    }

    try {
      setLoading(true)
      const { data, meta } = await postService.getList(page)
      setPostLit(prev => [...prev, ...data])
      if (meta.hasNextPage) {
        setPage(prev => prev + 1)
      } else {
        setHasNextPage(false)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInitialData()
  }, [])

  return {
    postList,
    loading,
    error,
    refresh: fetchInitialData,
    fetchNextPage
  }
}
