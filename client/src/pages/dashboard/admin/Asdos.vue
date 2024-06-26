<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { addAsdos } from '~/services/addAsdos';

const asdos_kode = ref<string | null>('ASD000');
const asdos_nama = ref<string | null>('');
const asdos_nrp = ref<string | null>('');
const asdos_angkatan = ref<string | null>('');
const asdos_noTelp = ref<string | null>('');

const handleSubmit = async () => {
  const response = await addAsdos({
    kode: asdos_kode.value,
    nama: asdos_nama.value,
    nrp: asdos_nrp.value,
    angkatan: asdos_angkatan.value,
    noTelp: asdos_noTelp.value,
  });

  if (response === 200) {
    alert('Asdos added successfully!');
    asdos_kode.value = '';
    asdos_nama.value = '';
    asdos_nrp.value = '';
    asdos_angkatan.value = '';
    asdos_noTelp.value = '';
  } else {
    alert('Failed to add asdos');
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Add Asdos</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="asdos_nrp" class="block text-gray-700">NRP</label>
          <input
            type="text"
            id="asdos_nrp"
            v-model="asdos_nrp"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="asdos_nama" class="block text-gray-700">Name</label>
          <input
            type="text"
            id="asdos_nama"
            v-model="asdos_nama"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="asdos_angkatan" class="block text-gray-700">Year (Ex: 22)</label>
          <input
            type="text"
            id="asdos_angkatan"
            v-model="asdos_angkatan"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="asdos_noTelp" class="block text-gray-700">Phone Number</label>
          <input
            type="text"
            id="asdos_noTelp"
            v-model="asdos_noTelp"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
