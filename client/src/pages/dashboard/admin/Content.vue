<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaterialSymbolsDashboard from '~icons/material-symbols/dashboard';
import MdiPeople from '~icons/mdi/people';
import MdiCalendar from '~icons/mdi/calendar';
import MdiHourglassEmpty from '~icons/mdi/hourglass-empty';
import MdiChatAdd from '~icons/mdi/chat-add';
import MdiOfficeBuildingPlus from '~icons/mdi/office-building-plus';
import MdiBooks from '~icons/mdi/books';
import AppStore from '../../../store';
import { action } from '../../../constant/pageConstant';

const sidebarStore = AppStore.sidebar;
</script>

<template>
  <button
    class="flex min-h-14 items-center rounded-lg bg-gradient-to-tr pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.admin_tables
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.admin_tables)"
  >
    <MaterialSymbolsDashboard
      class="size-7"
      :class="
        sidebarStore.action === action.admin_tables
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.admin_tables ? 'text-[#2F80ED]' : ''
      "
      >Tables</span
    >
  </button>

  <button
    class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.admin_people
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.admin_people)"
  >
    <MdiPeople
      class="size-7"
      :class="
        sidebarStore.action === action.admin_people
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.admin_people ? 'text-[#2F80ED]' : ''
      "
      >Praktikan</span
    >
  </button>


  <!-- Calendar -->
  <button
    class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.admin_calendar
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.admin_calendar)"
  >
    <MdiCalendar
      class="size-7"
      :class="
        sidebarStore.action === action.admin_calendar
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.admin_calendar ? 'text-[#2F80ED]' : ''
      "
      >Calendar</span
    >
  </button>

  <!-- Timesheet -->
  <button
    class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.admin_addPracticum
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.admin_addPracticum)"
  >
    <MdiHourglassEmpty
      class="size-7"
      :class="
        sidebarStore.action === action.admin_addPracticum
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.admin_addPracticum ? 'text-[#2F80ED]' : ''
      "
      >Practicum</span
    >
  </button>

  <!-- Reports -->
  <button
    class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.admin_reports
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.admin_reports)"
  >
    <MdiChatAdd
      class="size-7"
      :class="
        sidebarStore.action === action.admin_reports
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.admin_reports ? 'text-[#2F80ED]' : ''
      "
      >Statistics</span
    >
  </button>

  <!-- Asdos -->
  <button
    class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.admin_asdos
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.admin_asdos)"
  >
    <MdiPeople
      class="size-7"
      :class="
        sidebarStore.action === action.admin_asdos
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.admin_asdos ? 'text-[#2F80ED]' : ''
      "
      >Assistant</span
    >
  </button>

  <!-- Rooms -->
  <button
    class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.admin_rooms
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.admin_rooms)"
  >
    <MdiOfficeBuildingPlus
      class="size-7"
      :class="
        sidebarStore.action === action.admin_rooms
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.admin_rooms ? 'text-[#2F80ED]' : ''
      "
      >Rooms</span
    >
  </button>

  <!-- Subject -->
  <button
    class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
    :class="
      sidebarStore.action === action.admin_subject
        ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
        : ''
    "
    @click="sidebarStore.setAction(action.admin_subject)"
  >
    <MdiBooks
      class="size-7"
      :class="
        sidebarStore.action === action.admin_subject
          ? 'text-[#2F80ED]'
          : 'text-gray-700'
      "
    />
    <span
      class="pl-5 font-medium"
      :class="
        sidebarStore.action === action.admin_subject ? 'text-[#2F80ED]' : ''
      "
      >Subject</span
    >
  </button>
</template>
