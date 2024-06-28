/* eslint-disable @typescript-eslint/no-explicit-any */
import { runQuery } from './runQuery';

export const addSubject = async (subject: any) => {
  const query = `INSERT INTO MATA_KULIAH (mk_kode, mk_nama, mk_sks, mk_semester) VALUES ('${subject.code}', '${subject.name}', '${subject.sks}', '${subject.semester}')`;

  return runQuery(query, 'POST');
};
