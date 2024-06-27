<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { addPracticum } from '~/services/addPracticum';

const practicum_code = ref<string | null>('');
const room_code = ref<string | null>('');
const class_code = ref<string | null>('');
const practicum_title = ref<string | null>('');
const practicum_sched = ref<string | null>('');

const handleSubmit = async () => {
  const response = await addPracticum({
    kode: practicum_code.value,
    judul: practicum_title.value,
    tglPraktikum: practicum_sched.value,
    ruang_kode: room_code.value,
    kelas_kode: class_code.value,
  });

  if (response === 200) {
    alert('Practicum added successfully');
    practicum_code.value = '';
    room_code.value = '';
    class_code.value = '';
    practicum_title.value = '';
    practicum_sched.value = '';
  } else {
    alert('Failed to add practicum');
  }
};
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
      <h2 class="mb-6 text-center text-2xl font-bold">Add Practicum</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="room_code" class="block text-gray-700">Room Code</label>
          <input
            id="room_code"
            v-model="room_code"
            placeholder="Enter room code"
            type="text"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="class_code" class="block text-gray-700">Class Code</label>
          <input
            id="class_code"
            v-model="class_code"
            placeholder="Enter class code"
            type="text"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="practicum_title" class="block text-gray-700"
            >Practicum Title</label
          >
          <input
            id="practicum_title"
            v-model="practicum_title"
            placeholder="Enter practicum title"
            type="text"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-6">
          <label for="practicum_sched" class="block text-gray-700"
            >Schedule (YYYY-MM-DD HH-mm-SS)</label
          >
          <input
            id="practicum_sched"
            v-model="practicum_sched"
            type="text"
            placeholder="Enter schedule"
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
