/* eslint-disable @typescript-eslint/no-explicit-any */
import { runQuery } from './runQuery';

export const addRoom = async (room: any) => {
  const query = `INSERT INTO RUANGAN (ruang_kode, ruang_nama, ruang_kapasitas) VALUES ('${room.code}', '${room.name}', ${room.capacity})`;

  return runQuery(query, 'POST');
};
