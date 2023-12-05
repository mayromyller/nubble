import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.0.109:3333/',
  headers: {
    Authorization:
      'Bearer Mg.G_5cPdhANNzPViLVNk0zwrD0qHtlEgf-JGlESBbGtdF2h6RZn_D-JsTkCwUT'
  }
})
