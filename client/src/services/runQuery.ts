import { api } from './api'

export const runQuery = async (query: string) => {
  try {
    const response = await api.post('/run-query', { query })
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}