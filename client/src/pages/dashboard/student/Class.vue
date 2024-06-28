<!-- eslint-disable vue/multi-word-component-names -->
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
        query: `CALL get_student_classes('${auth.nrp}')`,
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
    id: 'kelas_kode',
    accessorKey: 'kelas_kode',
    header: 'Kode Kelas',
    // Additional configuration like sorting and filtering can be added here
  },
  {
    id: 'mk_nama',
    accessorKey: 'mk_nama',
    header: 'Nama Mata Kuliah',
    // Additional configuration like sorting and filtering can be added here
  },
  {
    id: 'mk_kode',
    accessorKey: 'mk_kode',
    header: 'Mata Kuliah',
    // Additional configuration like sorting and filtering can be added here
  },
  {
    id: 'mk_sks',
    accessorKey: 'mk_sks',
    header: 'Jumlah SKS',
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
