<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const props = defineProps({
  initialPage: {
    type: Object,
    required: true,
    default: () => ({ month: 1, year: 2022 }),
  },
  columns: {
    type: Number,
    required: true,
  },
  rows: {
    type: Number,
    required: true,
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
  attributes: {
    type: Object,
    default: () => ({}),
  },
  mode: {
    type: String,
    default: 'dateTime',
  },
  is24hr: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['setLoaded']);

onMounted(() => {
  emit('setLoaded');
});
</script>

<template>
  <VCalendar
    :initial-page="props.initialPage"
    :columns="props.columns"
    :rows="props.rows"
    :rules="props.rules"
    :attributes="props.attributes"
    mode="dateTime"
    is24hr
  />
</template>
