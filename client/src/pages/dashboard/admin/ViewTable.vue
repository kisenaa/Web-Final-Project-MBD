<script setup lang="ts">
import cars from '../../../../public/cars.json';

const datas = ref([]);

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
    datas.value = await response.json();
    console.log(datas.value);
  } catch (err) {
    console.log(err);
  }
};

const PraktikanColumn = [
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
];

const AsdosColumn = [
  {
    id: 'asdos_kode',
    accessorKey: 'asdos_kode',
    header: 'Kode',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'asdos_nama',
    header: 'Nama',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'asdos_nrp',
    header: 'NRP',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'asdos_angkatan',
    header: 'Angkatan',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'asdos_noTelp',
    header: 'No. Telp',
    filterFn: 'includesString', // use built-in filter function
  },
];

const MataKuliahColumn = [
  {
    id: 'mk_kode',
    accessorKey: 'mk_kode',
    header: 'Kode',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'mk_nama',
    header: 'Nama',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'mk_sks',
    header: 'SKS',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'mk_semester',
    header: 'Semester',
    filterFn: 'includesString', // use built-in filter function
  },
];

const KelasColumn = [
  {
    id: 'kelas_kode',
    accessorKey: 'kelas_kode',
    header: 'Kode Kelas',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'kelas_nama',
    header: 'Nama Kelas',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'kelas_jadwal',
    header: 'Jadwal',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'mk_kode',
    header: 'Kode Mata Kuliah',
    filterFn: 'includesString', // use built-in filter function
  },
];

const AsdosMembimbingKelasColumn = [
  {
    id: 'asdos_kode',
    accessorKey: 'asdos_kode',
    header: 'Kode Asdos',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'kelas_kode',
    header: 'Kode Kelas',
    filterFn: 'includesString', // use built-in filter function
  },
];

const PraktikanMengambilKelasColumn = [
  {
    id: 'mhs_nrp',
    accessorKey: 'mhs_nrp',
    header: 'NRP',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'kelas_kode',
    header: 'Kode Kelas',
    filterFn: 'includesString', // use built-in filter function
  },
];

const RuanganColumn = [
  {
    id: 'ruang_kode',
    accessorKey: 'ruang_kode',
    header: 'Kode Ruangan',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'ruang_nama',
    header: 'Nama Ruangan',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'ruang_kapasitas',
    header: 'Kapasitas',
    filterFn: 'includesString', // use built-in filter function
  },
];

const PraktikumColumn = [
  {
    id: 'prak_kode',
    accessorKey: 'prak_kode',
    header: 'Kode Praktikum',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'prak_judul',
    header: 'Judul Praktikum',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'prak_tglPraktikum',
    header: 'Tanggal Praktikum',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'ruang_kode',
    header: 'Kode Ruangan',
    filterFn: 'includesString', // use built-in filter function
  },
  {
    accessorKey: 'kelas_kode',
    header: 'Kode Kelas',
    filterFn: 'includesString', // use built-in filter function
  },
];

const selectedTable = ref('praktikan');
// Call ParseTable on component mount
onMounted(() => {
  ParseTable(selectedTable.value); // Replace with your actual table name
});

watch(selectedTable, () => {
  ParseTable(selectedTable.value)
})

</script>

<template>
  <div class="flex flex-col justify-center">
    <select
      v-model="selectedTable"
      class="select select-accent mx-auto mt-4 max-w-xs rounded-lg"
    >
      <option disabled selected>Pick which table to show</option>
      <option value="asdos"> asdos </option>
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
      :data="datas"
      :columns="PraktikanColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'asdos'"
      :data="datas"
      :columns="AsdosColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'kelas'"
      :data="datas"
      :columns="KelasColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'mata_kuliah'"
      :data="datas"
      :columns="MataKuliahColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'praktikum'"
      :data="datas"
      :columns="PraktikumColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'ruangan'"
      :data="datas"
      :columns="RuanganColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'asdos_membimbing_kelas'"
      :data="datas"
      :columns="AsdosMembimbingKelasColumn"
    />
    <VueTanstack
      v-if="selectedTable === 'praktikan_mengambil_kelas'"
      :data="datas"
      :columns="PraktikanMengambilKelasColumn"
    />
  </div>
</template>
