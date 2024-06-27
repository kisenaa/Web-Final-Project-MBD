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
  <div class="flex h-full items-center justify-center">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
      <h2 class="mb-6 text-center text-2xl font-bold">Add Subject</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="subject_name" class="block text-gray-700"
            >Subject Name</label
          >
          <input
            id="subject_name"
            v-model="subject_name"
            placeholder="Enter name"
            type="text"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="subject_sks" class="block text-gray-700"
            >Subject SKS</label
          >
          <input
            id="subject_sks"
            v-model="subject_sks"
            type="text"
            placeholder="Enter sks"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="subject_semester" class="block text-gray-700"
            >Subject Semester</label
          >
          <input
            id="subject_semester"
            v-model="subject_semester"
            type="text"
            placeholder="Enter semester"
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
