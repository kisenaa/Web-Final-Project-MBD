<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ColumnDef } from '@tanstack/vue-table';
import { h } from 'vue';
import { Asdos, AsdosMembimbingKelas, MataKuliah, Praktikan, PraktikanMengambilKelas, Praktikum, Ruangan } from '../../../Interface/interface';
import AppStore from '../../../store';
import PraktikanTbAction from '../../../components/Table/PraktikanTbAction.vue';
import AsdosTbAction from '../../../components/Table/AsdosTbAction.vue';
import MatkulTbAction from '../../../components/Table/MatkulTbAction.vue';
import { format } from 'date-fns';
import PraktikumTbAction from '../../../components/Table/PraktikumTbAction.vue';
import RuanganTbAction from '../../../components/Table/RuanganTbAction.vue';
import PraktikanMengambilTbAction from '../../../components/Table/PraktikanMengambilTbAction.vue';
import AsdosMembimbingTbAction from '../../../components/Table/AsdosMembimbingTbAction.vue';

const tableState = AppStore.ViewTableState;

const ParseTable = async (table: string) => {
  try {
    const response = await fetch('http://localhost:5000/run-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `SELECT * FROM ${table}`,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    tableState.setDatas(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const PraktikanColumn: ColumnDef<Praktikan>[] = [
  {
    id: 'mhs_nrp',
    accessorKey: 'mhs_nrp',
    header: 'ID',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'mhs_nama',
    header: 'Nama',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'mhs_angkatan',
    header: 'Angkatan',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    id: 'actions',
    header: 'actions',
    cell: ({ row }) => h(PraktikanTbAction, { row }),
  },
];

const AsdosColumn: ColumnDef<Asdos>[] = [
  {
    id: 'asdos_kode',
    accessorKey: 'asdos_kode',
    header: 'Kode',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    id: 'asdos_nama',
    accessorKey: 'asdos_nama',
    header: 'Nama',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    id: 'asdos_nrp',
    accessorKey: 'asdos_nrp',
    header: 'NRP',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    id: 'asdos_angkatan',
    accessorKey: 'asdos_angkatan',
    header: 'Angkatan',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    id: 'asdos_noTelp',
    accessorKey: 'asdos_noTelp',
    header: 'No. Telp',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    id: 'actions',
    header: 'actions',
    cell: ({ row }) => h(AsdosTbAction, { row }),
  },
];

const MataKuliahColumn: ColumnDef<MataKuliah>[] = [
  {
    id: 'mk_kode',
    accessorKey: 'mk_kode',
    header: 'Kode',
    filterFn: 'includesString',
  },
  {
    id: 'mk_nama',
    accessorKey: 'mk_nama',
    header: 'Nama',
    filterFn: 'includesString',
  },
  {
    id: 'mk_sks',
    accessorKey: 'mk_sks',
    header: 'SKS',
    filterFn: 'includesString',
  },
  {
    id: 'mk_semester',
    accessorKey: 'mk_semester',
    header: 'Semester',
    filterFn: 'includesString',
  },
  {
    id: 'actions',
    header: 'actions',
    cell: ({ row }) => h(MatkulTbAction, { row }),
  },
];

const KelasColumn = [
  {
    id: 'kelas_kode',
    accessorKey: 'kelas_kode',
    header: 'Kode Kelas',
    filterFn: 'includesString',
  },
  {
    id: 'kelas_nama',
    accessorKey: 'kelas_nama',
    header: 'Nama Kelas',
    filterFn: 'includesString',
  },
  {
    id: 'kelas_jadwal',
    accessorKey: 'kelas_jadwal',
    header: 'Jadwal',
    filterFn: 'includesString',
  },
  {
    id: 'mk_kode',
    accessorKey: 'mk_kode',
    header: 'Kode Mata Kuliah',
    filterFn: 'includesString',
  },
];

const AsdosMembimbingKelasColumn:ColumnDef<AsdosMembimbingKelas>[] = [
  {
    id: 'asdos_kode',
    accessorKey: 'asdos_kode',
    header: 'Kode Asdos',
    filterFn: 'includesString',
  },
  {
    id: 'kelas_kode',
    accessorKey: 'kelas_kode',
    header: 'Kode Kelas',
    filterFn: 'includesString',
  },
  {
    id: 'actions',
    header: 'actions',
    cell: ({ row }) => h(AsdosMembimbingTbAction, { row }),
  },
];

const PraktikanMengambilKelasColumn:ColumnDef<PraktikanMengambilKelas>[] = [
  {
    id: 'mhs_nrp',
    accessorKey: 'mhs_nrp',
    header: 'NRP',
    filterFn: 'includesString',
  },
  {
    id: 'kelas_kode',
    accessorKey: 'kelas_kode',
    header: 'Kode Kelas',
    filterFn: 'includesString',
  },
  {
    id: 'actions',
    header: 'actions',
    cell: ({ row }) => h(PraktikanMengambilTbAction, { row }),
  },
];

const RuanganColumn:ColumnDef<Ruangan>[] = [
  {
    id: 'ruang_kode',
    accessorKey: 'ruang_kode',
    header: 'Kode Ruangan',
    filterFn: 'includesString',
  },
  {
    id: 'ruang_nama',
    accessorKey: 'ruang_nama',
    header: 'Nama Ruangan',
    filterFn: 'includesString',
  },
  {
    id: 'ruang_kapasitas',
    accessorKey: 'ruang_kapasitas',
    header: 'Kapasitas',
    filterFn: 'includesString',
  },
  {
    id: 'actions',
    header: 'actions',
    cell: ({ row }) => h(RuanganTbAction, { row }),
  },
];

const PraktikumColumn:ColumnDef<Praktikum>[] = [
  {
    id: 'prak_kode',
    accessorKey: 'prak_kode',
    header: 'Kode Praktikum',
    filterFn: 'includesString',
  },
  {
    id: 'prak_judul',
    accessorKey: 'prak_judul',
    header: 'Judul Praktikum',
    filterFn: 'includesString',
  },
  {
    id: 'prak_tglPraktikum',
    accessorKey: 'prak_tglPraktikum',
    header: 'Tanggal Praktikum',
    filterFn: 'includesString',
    cell: (info: any) => {
      const date = new Date(info.getValue());
      const localDateString = date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
      return localDateString;
    },
  },
  {
    id: 'ruang_kode',
    accessorKey: 'ruang_kode',
    header: 'Kode Ruangan',
    filterFn: 'includesString',
  },
  {
    id: 'kelas_kode',
    accessorKey: 'kelas_kode',
    header: 'Kode Kelas',
    filterFn: 'includesString',
  },
  {
    id: 'actions',
    header: 'actions',
    cell: ({ row }) => h(PraktikumTbAction, { row }),
  },
];

const selectedTable = ref('praktikan');
// Call ParseTable on component mount
onMounted(() => {
  ParseTable(selectedTable.value); // Replace with your actual table name
});

watch(selectedTable, () => {
  ParseTable(selectedTable.value);
});
</script>

<template>
  <div class="flex flex-col justify-center">
    <select
      v-model="selectedTable"
      class="select select-accent mx-auto mt-4 max-w-xs rounded-lg"
    >
      <option disabled selected>Pick which table to show</option>
      <option value="asdos">asdos</option>
      <option value="kelas">kelas</option>
      <option value="mata_kuliah">mata kuliah</option>
      <option value="praktikan">praktikan</option>
      <option value="praktikum">praktikum</option>
      <option value="ruangan">ruangan</option>
      <option value="asdos_membimbing_kelas">asdos_membimbing_kelas</option>
      <option value="praktikan_mengambil_kelas">
        praktikan_mengambil_kelas
      </option>
    </select>
    <!-- <TableOriginal /> -->
    <VueTanstack
      v-if="selectedTable === 'praktikan'"
      :data="tableState.datas"
      :columns="PraktikanColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'asdos'"
      :data="tableState.datas"
      :columns="AsdosColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'kelas'"
      :data="tableState.datas"
      :columns="KelasColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'mata_kuliah'"
      :data="tableState.datas"
      :columns="MataKuliahColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'praktikum'"
      :data="tableState.datas"
      :columns="PraktikumColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'ruangan'"
      :data="tableState.datas"
      :columns="RuanganColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'asdos_membimbing_kelas'"
      :data="tableState.datas"
      :columns="AsdosMembimbingKelasColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'praktikan_mengambil_kelas'"
      :data="tableState.datas"
      :columns="PraktikanMengambilKelasColumn"
    />
  </div>
</template>
