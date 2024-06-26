import { runQuery } from "./runQuery";

export const addPracticum = async (practicum: any) => {
  const query = `INSERT INTO PRAKTIKUM (prak_kode, prak_judul, prak_tglPraktikum, ruang_kode, kelas_kode) VALUES ('${practicum.kode}', '${practicum.judul}', '${practicum.tglPraktikum}', '${practicum.ruang_kode}', '${practicum.kelas_kode}')`;

  return runQuery(query);
};
