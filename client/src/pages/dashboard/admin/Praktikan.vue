<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { addPraktikan } from '~/services/addPraktikan';

const mhs_nama = ref<string | null>('');
const mhs_nrp = ref<string | null>('');
const mhs_angkatan = ref<string | null>('');

const handleSubmit = async () => {
  const response = await addPraktikan({
    mhs_nrp: mhs_nrp.value,
    mhs_nama: mhs_nama.value,
    mhs_angkatan: mhs_angkatan.value,
  });

  if (response === 200) {
    alert('Praktikan added successfully!');
    mhs_nama.value = '';
    (mhs_nrp.value = ''), (mhs_angkatan.value = '');
  } else {
    alert('Failed to add Praktikan');
  }
};
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
      <h2 class="text-center text-2xl font-bold">Add Praktikan</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="mhs_nrp" class="mb-2 block text-gray-700">NRP</label>
          <input
            id="mhs_nrp"
            v-model="mhs_nrp"
            placeholder="Enter nrp"
            type="text"
            class="w-full rounded-md border bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="mhs_nama" class="block text-gray-700">Name</label>
          <input
            id="mhs_nama"
            v-model="mhs_nama"
            placeholder="Enter name"
            type="text"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="mhs_angkatan" class="block text-gray-700"
            >Year (Ex: 2022)</label
          >
          <input
            id="mhs_angkatan"
            v-model="mhs_angkatan"
            placeholder="Enter angkatan"
            type="text"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
