import { api } from './api';

export const runQuery = async (query: string, type: string) => {
  try {
    if (type === 'POST') {
      const response = await api.post('/run-query', { query });
      return response.status;
    } else {
      const response = await api.get(`/run-query?query=${query}`);
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
