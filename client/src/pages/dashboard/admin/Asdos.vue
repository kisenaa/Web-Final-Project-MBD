<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { addAsdos } from '~/services/addAsdos';

const asdos_nama = ref<string | null>('');
const asdos_nrp = ref<string | null>('');
const asdos_angkatan = ref<string | null>('');
const asdos_noTelp = ref<string | null>('');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10); // Generates a number between 0 and 9
};

// Function to generate a new asdos_kode with 3 random numbers appended
const generateAsdosKode = () => {
  const randomNumbers = Array.from({ length: 3 }, getRandomNumber).join('');
  return `ASD${randomNumbers}`;
};

const handleSubmit = async () => {
  const response = await addAsdos({
    kode: generateAsdosKode(),
    nama: asdos_nama.value,
    nrp: asdos_nrp.value,
    angkatan: asdos_angkatan.value,
    noTelp: asdos_noTelp.value,
  });

  if (response === 200) {
    alert('Asdos added successfully!');
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
  <div class="flex h-full items-center justify-center">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
      <h2 class="text-center text-2xl font-bold">Add Asdos</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="asdos_nrp" class="mb-2 block text-gray-700">NRP</label>
          <input
            id="asdos_nrp"
            v-model="asdos_nrp"
            placeholder="Enter nrp"
            type="text"
            class="w-full rounded-md border bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="asdos_nama" class="block text-gray-700">Name</label>
          <input
            id="asdos_nama"
            v-model="asdos_nama"
            placeholder="Enter name"
            type="text"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="asdos_angkatan" class="block text-gray-700"
            >Year (Ex: 22)</label
          >
          <input
            id="asdos_angkatan"
            v-model="asdos_angkatan"
            placeholder="Enter angkatan"
            type="text"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="asdos_noTelp" class="block text-gray-700"
            >Phone Number</label
          >
          <input
            id="asdos_noTelp"
            v-model="asdos_noTelp"
            placeholder="Enter phone number"
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
