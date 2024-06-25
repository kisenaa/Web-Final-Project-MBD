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
      class="flex w-full items-center justify-center bg-white px-6 py-4 align-middle lg:flex lg:w-[30%] lg:min-w-[400px]"
    >
      <Login />
    </div>

    <!-- Right Display Section -->
    <div class="hidden lg:flex"></div>
  </div>
</template>
