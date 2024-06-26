<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MdiHourglassEmpty from '~icons/mdi/hourglass-empty';
import AppStore from '../../../store';
import { action } from '../../../constant/pageConstant';

const sidebarStore = AppStore.sidebar;
</script>

<template>
  <!-- Timesheet -->
  <button
    class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.asdos_timesheet
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.asdos_timesheet)"
  >
    <MdiHourglassEmpty
      class="size-7"
      :class="
        sidebarStore.action === action.asdos_timesheet
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.asdos_timesheet ? 'text-[#2F80ED]' : ''
      "
      >Timesheet</span
    >
  </button>
</template>
