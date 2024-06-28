import { runQuery } from './runQuery';

export const fetchPracticum = async () => {
  const query = `SELECT * FROM PRAKTIKUM JOIN KELAS ON PRAKTIKUM.kelas_kode = KELAS.kelas_kode JOIN MATA_KULIAH ON KELAS.mk_kode = MATA_KULIAH.mk_kode JOIN RUANGAN ON PRAKTIKUM.ruang_kode = RUANGAN.ruang_kode`;
  return runQuery(query, 'GET');
};
