import { MetaDataPage } from '@types'

import { MetaDataPaginationAPI } from './types/apiTypes'

function toMetaDataPage(meta: MetaDataPaginationAPI): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    firstPage: meta.first_page,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url
  }
}

export const apiAdapter = {
  toMetaDataPage
}
