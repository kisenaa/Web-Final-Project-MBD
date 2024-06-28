import { role } from '../constant/pageConstant';

// Auth State
export interface IAuth {
  username: string;
  role: role;
  nrp: string;
}

export interface Praktikan {
  mhs_nrp: string;
  mhs_nama: string;
  mhs_angkatan: string;
}

export interface Asdos {
  asdos_kode: string;
  asdos_nama: string;
  asdos_nrp: string;
  asdos_angkatan: string;
  asdos_noTelp: string;
}

export interface MataKuliah {
  mk_kode: string;
  mk_nama: string;
  mk_sks: number;
  mk_semester: number;
}

export interface Kelas {
  kelas_kode: string;
  kelas_nama: string;
  kelas_jadwal: string;
  mk_kode: string;
}

export interface AsdosMembimbingKelas {
  asdos_kode: string;
  kelas_kode: string;
}

export interface PraktikanMengambilKelas {
  mhs_nrp: string;
  kelas_kode: string;
}

export interface Ruangan {
  ruang_kode: string;
  ruang_nama: string;
  ruang_kapasitas: number;
}

export interface Praktikum {
  prak_kode: string;
  prak_judul: string;
  prak_tglPraktikum: string;
  ruang_kode: string;
  kelas_kode: string;
}
