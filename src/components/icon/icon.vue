<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  iconclass: {
    type: String,
    default: '', // Optional default class if not provided
  },
})

const icon = defineAsyncComponent(
  () => import(`../../assets/svg/${props.name}.svg`)
)
</script>

<template>
  <component :is="icon" :class="[iconclass, 'fill-current']" />
</template>
