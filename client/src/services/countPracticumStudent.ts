/* eslint-disable @typescript-eslint/no-explicit-any */
import { runQuery } from './runQuery';

export const countPracticumStudent = async (nrp: string) => {
  const query = `SELECT count_practicums('${nrp}') AS practicum_count;`;

  return runQuery(query, 'GET');
};
