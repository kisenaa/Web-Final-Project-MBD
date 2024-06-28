/* eslint-disable @typescript-eslint/no-explicit-any */
import { runQuery } from './runQuery';

export const deleteData = async (table: string, data: unknown[]) => {
  if (data.length === 0) {
    throw new Error('props array is empty or undefined');
  }

  const conditions = data
    .map((item: any) => {
      return `${item.props} = '${item.value}'`;
    })
    .join(' AND ');

  const query = `DELETE FROM ${table} WHERE ${conditions}`;

  return runQuery(query, 'POST');
};
