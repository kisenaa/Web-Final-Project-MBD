import { runQuery } from "./runQuery";

export const addAsdos = async (asdos: any) => {
  const query = `INSERT INTO ASDOS (asdos_kode, asdos_nama, asdos_nrp, asdos_angkatan, asdos_noTelp) VALUES ('${asdos.asdos_kode}', '${asdos.asdos_nama}', '${asdos.asdos_nrp}', '${asdos.asdos_angkatan}', '${asdos.asdos_noTelp}')`;

  return runQuery(query);
};
