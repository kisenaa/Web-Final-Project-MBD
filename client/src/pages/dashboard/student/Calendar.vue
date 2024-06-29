<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import AppStore from '../../../store';

const datas = ref([]);
const auth = AppStore.auth;

const CallProcedure = async (nrp: string) => {
  try {
    const response = await fetch('http://localhost:5000/run-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `CALL GetPraktikumDetails('${auth.nrp}')`,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    datas.value = data[0];
    console.log(datas.value);
  } catch (err) {
    console.log(err);
  }
};

const columns = [
  {
    id: 'prak_tglPraktikum',
    accessorKey: 'prak_tglPraktikum',
    header: 'Tanggal Praktikum',
    // Additional configuration like sorting and filtering can be added here
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
    id: 'mk_nama',
    accessorKey: 'mk_nama',
    header: 'Nama Mata Kuliah',
    // Additional configuration like sorting and filtering can be added here
  },
  {
    id: 'prak_judul',
    accessorKey: 'prak_judul',
    header: 'Judul Praktikum',
    // Additional configuration like sorting and filtering can be added here
  },
  {
    id: 'ruang_kode',
    accessorKey: 'ruang_kode',
    header: 'Kode Ruangan',
    // Additional configuration like sorting and filtering can be added here
  },
];

onMounted(() => {
  CallProcedure(auth.nrp); // Replace with your actual table name
});

watch(auth, () => {
  CallProcedure(auth.nrp); // Replace with your actual table name
});
</script>

<template>
  <div class="flex flex-col justify-center">
    <VueTanstack :data="datas" :columns="columns" />
  </div>
</template>
