<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import { useScreens } from 'vue-screen-utils';
  import { ref } from 'vue';
  import { fetchPracticum } from '~/services/fetchPracticum';

  let attributes = ref([])

  const rules = ref({
    hours: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    seconds: 0,
    milliseconds: 0,
  });

  const { mapCurrent } = useScreens({
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
  });
  const columns = mapCurrent({ lg: 6, md: 4, sm: 2 }, 1);
  const rows = mapCurrent({ lg: 3, md: 2, sm: 2 }, 1);

  fetchPracticum().then((data) => {
    console.log(data);
    let newAttribute;
    data.forEach((practicum) => {
      let newLabel = `${practicum.mk_nama} ${practicum.kelas_nama} - ${practicum.prak_judul} at ${practicum.ruang_kode}`;
      newAttribute = {
        key: practicum.prak_kode,
        dates: new Date(practicum.prak_tglPraktikum),
        dot: 'blue',
        popover: {
          label: newLabel
        }
      };

      attributes.value.push(newAttribute);
    });
  });

  console.log(attributes.value);

</script>

<template>
  <div class="text-center">
    <VCalendar
      :initial-page="{ month: 1, year: 2022 }"
      :columns="columns"
      :rows="rows"
      :rules="rules"
      :attributes="attributes"
      mode="dateTime"
      is24hr
    />
  </div>
</template>
