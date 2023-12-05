import { PageAPI } from '@api'

import { PostAPI } from './postTypes'

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://192.168.0.109:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.G_5cPdhANNzPViLVNk0zwrD0qHtlEgf-JGlESBbGtdF2h6RZn_D-JsTkCwUT'
    }
  })

  let data = await response.json()
  return data
}

export const postApi = {
  getList
}
