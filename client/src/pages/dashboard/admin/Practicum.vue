<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

const practicum_code = ref<string | null>('');
const room_code = ref<string | null>('');
const class_code = ref<string | null>('');
const practicum_title = ref<string | null>('');
const practicum_sched = ref<string | null>('');

const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:5000/run-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `INSERT INTO PRAKTIKUM VALUES ('${practicum_code.value}', '${room_code.value}', '${class_code.value}', '${practicum_title.value}', '${practicum_sched.value}')`
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to insert data');
    }
    console.log('Data inserted successfully');
  }
  catch (error) {
    console.error('Error:', error);
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Add Practicum</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="practicum_code" class="block text-gray-700">Practicum Code</label>
          <input
            type="text"
            id="practicum_code"
            v-model="practicum_code"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="room_code" class="block text-gray-700">Room Code</label>
          <input
            type="text"
            id="room_code"
            v-model="room_code"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="class_code" class="block text-gray-700">Class Code</label>
          <input
            type="text"
            id="class_code"
            v-model="class_code"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="practicum_title" class="block text-gray-700">Practicum Title</label>
          <input
            type="text"
            id="practicum_title"
            v-model="practicum_title"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-6">
          <label for="practicum_sched" class="block text-gray-700">Practicum Schedule</label>
          <input
            type="text"
            id="practicum_sched"
            v-model="practicum_sched"
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
