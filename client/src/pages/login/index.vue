<script setup lang="ts">
import Login from './login-section.vue';

defineOptions({
  name: 'LoginPage',
});
</script>

<template>
  <div class="flex h-screen flex-row bg-gray-900">
    <!-- Login section -->
    <div
      class="grid w-full place-items-center items-center overflow-y-auto bg-white px-6 py-4 align-middle lg:w-[30%] lg:min-w-[400px] lg:shrink-0"
    >
      <Login />
    </div>

    <!-- Right Display Section -->
    <div
      class="hidden text-white lg:flex lg:w-full lg:flex-col lg:items-center lg:justify-center lg:overflow-y-auto"
    >
      <Icon name="login-illustration" class="mb-4 size-96 fill-white" />
      <div
        class="flex flex-row gap-6 text-center text-3xl font-medium leading-9 text-teal-500"
      >
        <Icon name="keyhole" class="size-8 fill-white" />
        <span
          class="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent motion-safe:animate-pulse"
        >
          Please Complete The Authentication Step
        </span>
      </div>
    </div>
  </div>
</template>
