<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { addSubject } from '~/services/addSubject';

const subject_code = ref<string | null>('TI000');
const subject_name = ref<string | null>('');
const subject_sks = ref<string | null>('');
const subject_semester = ref<string | null>('');

const handleSubmit = async () => {
  const response = await addSubject({
    code: subject_code.value,
    name: subject_name.value,
    sks: subject_sks.value,
    semester: subject_semester.value,
  });

  if (response === 200) {
    alert('Subject added successfully');
    subject_code.value = '';
    subject_name.value = '';
    subject_sks.value = '';
    subject_semester.value = '';
  } else {
    alert('Failed to add subject');
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Add Subject</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="subject_name" class="block text-gray-700">Subject Name</label>
          <input
            type="text"
            id="subject_name"
            v-model="subject_name"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="subject_sks" class="block text-gray-700">Subject SKS</label>
          <input
            type="text"
            id="subject_sks"
            v-model="subject_sks"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="subject_semester" class="block text-gray-700">Subject Semester</label>
          <input
            type="text"
            id="subject_semester"
            v-model="subject_semester"
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
