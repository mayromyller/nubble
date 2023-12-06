import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.0.109:3333/',
  headers: {
    Authorization:
      'Bearer MQ.Ar9akviG0xxxhllzom2-ZI4IgE3yEFgqB3B8u7NX73RIBqBo0YpBWykC1es0'
  }
})
