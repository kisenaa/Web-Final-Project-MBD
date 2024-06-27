<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AppStore from '../../../store';

import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)


interface PraktikanData {
  mhs_angkatan: number;
  jumlah_praktikan: number;
}

const datas = ref<PraktikanData[]>([]);
const auth = AppStore.auth;
const AggregateParticipant = async () => {
  try {
    const response = await fetch('http://localhost:5000/run-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `SELECT mhs_angkatan, COUNT(*) AS jumlah_praktikan FROM PRAKTIKAN GROUP BY mhs_angkatan`,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    datas.value = await response.json();
    console.log(datas.value);
  } catch (err) {
    console.log(err);
  }
};

// Extract labels and data for chart
// Computed properties for labels and datasetData
const labels = computed(() => datas.value.map((item) => item.mhs_angkatan));
const datasetData = computed(() =>
  datas.value.map((item) => item.jumlah_praktikan)
);

// Reactive ref for chartData
const chartData = ref({
  labels: labels.value,
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'], // Adjust colors as needed
      data: datasetData.value,
    },
  ],
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'Participants by Angkatan',
    fontSize: 16,
  },
};

// Watch for changes in labels and datasetData
watch([labels, datasetData], () => {
  chartData.value = {
    labels: labels.value,
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'], // Adjust colors as needed
        data: datasetData.value,
      },
    ],
  };
});

onMounted(() => {
  AggregateParticipant(); // Replace with your actual table name
});
</script>

<template>
    <div class="w-full items-center text-center">
        Participants by angkatan
    </div>
  <div class="flex items-center justify-center mt-8">
    <Pie :data="chartData" :options="options" />
  </div>
</template>
