<script setup lang="ts">
defineOptions({
  name: 'ErrorPage',
});
const router = useRouter();
const errorCode = ref<number>(404);
</script>

<template>
  <div class="flex flex-col items-center gap-20 py-20">
    <div class="w-96">
      <div>
        <h2>Error {{ errorCode }}!</h2>
        <p>We're sorry, something is not right, page not found!</p>
        <div class="justify-end">
          <button>" @click="router.back()">Back !</button>
        </div>
      </div>
    </div>
  </div>
</template>
