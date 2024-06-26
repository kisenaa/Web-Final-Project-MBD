<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

const variable1 = ref<string>('');
const variable2 = ref<string>('');
const variable3 = ref<string>('');
const variable4 = ref<string>('');
const variable5 = ref<string>('');

try {
  const response = await fetch('http://localhost:5000/run-query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `INSERT INTO practicum (variable1, variable2, variable3, variable4, variable5) VALUES ('${variable1}', '${variable2}', '${variable3}', '${variable4}', '${variable5}')`
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to insert data');
  }
  console.log('Data inserted successfully');
}

</script>

<template>
  <div class="text-center">
    
    <h1 class="text-3xl font-bold">Add Practicum</h1>
    <input v-model="variable1" type="text" placeholder="Variable 1" class="input-field">
    <input v-model="variable2" type="text" placeholder="Variable 2" class="input-field">
    <input v-model="variable3" type="text" placeholder="Variable 3" class="input-field">
    <input v-model="variable4" type="text" placeholder="Variable 4" class="input-field">
    <input v-model="variable5" type="text" placeholder="Variable 4" class="input-field">

  </div>
</template>
