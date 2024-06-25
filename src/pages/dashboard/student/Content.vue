<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MdiCalendar from '~icons/mdi/calendar';
import AppStore from '../../../store';
import { action } from '../../../constant/pageConstant';

const sidebarStore = AppStore.sidebar;
</script>

<template>
  <!-- Timesheet -->
  <button
    class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.student_calendar
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.student_calendar)"
  >
    <MdiCalendar
      class="size-7"
      :class="
        sidebarStore.action === action.student_calendar
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.student_calendar ? 'text-[#2F80ED]' : ''
      "
      >Calendar</span
    >
  </button>
</template>
