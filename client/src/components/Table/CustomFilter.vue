<!-- CustomFilter.vue -->
<template>
  <div class="mt-2 flex space-x-2">
    <input
      v-model="filterValue"
      type="text"
      placeholder="Filter"
      class="rounded border-2 border-solid border-gray-400/70 p-1"
      @input="onFilterChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  column: Object,
  table: Object,
});

const filterValue = ref(props.column!.getFilterValue() || '');

const onFilterChange = () => {
  props.column!.setFilterValue(filterValue.value);
};

// Watch for external changes
watch(
  () => props.column!.getFilterValue(),
  (newVal) => {
    filterValue.value = newVal || '';
  }
);
</script>
