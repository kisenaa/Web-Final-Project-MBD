import { runQuery } from "./runQuery";

export const addAsdos = async (asdos: any) => {
  const query = `INSERT INTO ASDOS (asdos_kode, asdos_nama, asdos_nrp, asdos_angkatan, asdos_noTelp) VALUES ('${asdos.kode}', '${asdos.nama}', '${asdos.nrp}', '${asdos.angkatan}', '${asdos.noTelp}')`;

  return runQuery(query);
};
