<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { addRoom } from '~/services/addRoom';

const room_code = ref<string | null>('');
const room_name = ref<string | null>('');
const room_capacity = ref<number | null>(null);

const handleSubmit = async () => {
  const response = await addRoom({
    code: room_code.value,
    name: room_name.value,
    capacity: room_capacity.value,
  });

  if (response === 200) {
    alert('Room added successfully!');
    room_code.value = '';
    (room_name.value = ''), (room_capacity.value = null);
  } else {
    alert('Failed to add room');
  }
};
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
      <h2 class="text-center text-2xl font-bold">Add Room</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="room_code" class="mb-2 block text-gray-700"
            >Room Code</label
          >
          <input
            id="room_code"
            v-model="room_code"
            placeholder="Enter room code"
            type="text"
            class="w-full rounded-md border bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="room_name" class="block text-gray-700">Name</label>
          <input
            id="room_name"
            v-model="room_name"
            placeholder="Enter room name"
            type="text"
            class="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div class="mb-4">
          <label for="room_capacity" class="block text-gray-700"
            >Capacity</label
          >
          <input
            id="room_capacity"
            v-model="room_capacity"
            placeholder="Enter capacity"
            type="number"
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
