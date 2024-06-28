/* eslint-disable @typescript-eslint/no-explicit-any */
import { runQuery } from "./runQuery";

export const addPraktikan = async (val: any) => {
  const query = `INSERT INTO Praktikan (mhs_nrp, mhs_nama, mhs_angkatan) VALUES ('${val.mhs_nrp}', '${val.mhs_nama}', '${val.mhs_angkatan}')`;

  return runQuery(query, "POST");
};
