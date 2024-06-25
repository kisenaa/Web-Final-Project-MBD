<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaterialSymbolsDashboard from '~icons/material-symbols/dashboard';
import MdiPeople from '~icons/mdi/people';
import MdiCalendar from '~icons/mdi/calendar';
import MdiHourglassEmpty from '~icons/mdi/hourglass-empty';
import MdiChatAdd from '~icons/mdi/chat-add';
import MdiOfficeBuildingPlus from '~icons/mdi/office-building-plus';
import MdiBooks from '~icons/mdi/books';
import MdiChevronDown from '~icons/mdi/chevron-down';
import AppStore from '../../store';
import { action, role } from '../../constant/pageConstant';

const sidebarStore = AppStore.sidebar;
const auth = AppStore.auth;

const displayRole = (value: role) => {
  switch (value) {
    case role.admin:
      return 'Admin';
    case role.asdos:
      return 'Assistant';
    case role.student:
      return 'Student';
    default:
      return 'Admin';
  }
};
</script>

<template>
  <div class="block flex-1">
    <div class="flex w-full grow items-center justify-center py-6 text-center">
      <span class="flex flex-row items-center gap-1 bg-transparent">
        <Icon name="dashboard" class="size-12" />
        <span class="pointer-events-none text-2xl font-semibold">
          Dashboard
        </span>
        <span class="ml-[2px] mt-2 shrink-0 text-xs font-medium text-[#5b5a5a]">
          v1.0
        </span>
      </span>
    </div>
    <hr class="mx-auto h-px max-w-[calc(100%-2rem)] border-2 bg-gray-300" />

    <div
      class="mx-auto mt-6 flex max-h-[560px] max-w-[calc(100%-2rem)] flex-col gap-4"
    >
      <button
        class="flex min-h-14 items-center rounded-lg bg-gradient-to-tr pl-3 duration-200 ease-in hover:bg-slate-100"
        :class="
          sidebarStore.action === action.tables
            ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
            : ''
        "
        @click="sidebarStore.setAction(action.tables)"
      >
        <MaterialSymbolsDashboard
          class="size-7"
          :class="
            sidebarStore.action === action.tables
              ? 'text-[#2F80ED]'
              : 'text-gray-700'
          "
        />
        <span
          class="pl-5 font-medium"
          :class="sidebarStore.action === action.tables ? 'text-[#2F80ED]' : ''"
          >Tables</span
        >
      </button>

      <button
        class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
        :class="
          sidebarStore.action === action.people
            ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
            : ''
        "
        @click="sidebarStore.setAction(action.people)"
      >
        <MdiPeople
          class="size-7"
          :class="
            sidebarStore.action === action.people
              ? 'text-[#2F80ED]'
              : 'text-gray-700'
          "
        />
        <span
          class="pl-5 font-medium"
          :class="sidebarStore.action === action.people ? 'text-[#2F80ED]' : ''"
          >People</span
        >
      </button>

      <!-- Project -->
      <button
        class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
        :class="
          sidebarStore.action === action.project
            ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
            : ''
        "
        @click="sidebarStore.setAction(action.project)"
      >
        <Icon
          name="project"
          class="w-[1.8rem]"
          :class="
            sidebarStore.action === action.project
              ? 'text-[#2F80ED]'
              : 'text-gray-700'
          "
        />
        <span
          class="pl-5 font-medium"
          :class="
            sidebarStore.action === action.project ? 'text-[#2F80ED]' : ''
          "
          >Project</span
        >
      </button>

      <!-- Calendar -->
      <button
        class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
        :class="
          sidebarStore.action === action.calendar
            ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
            : ''
        "
        @click="sidebarStore.setAction(action.calendar)"
      >
        <MdiCalendar
          class="size-7"
          :class="
            sidebarStore.action === action.calendar
              ? 'text-[#2F80ED]'
              : 'text-gray-700'
          "
        />
        <span
          class="pl-5 font-medium"
          :class="
            sidebarStore.action === action.calendar ? 'text-[#2F80ED]' : ''
          "
          >Calendar</span
        >
      </button>

      <!-- Timesheet -->
      <button
        class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
        :class="
          sidebarStore.action === action.timesheet
            ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
            : ''
        "
        @click="sidebarStore.setAction(action.timesheet)"
      >
        <MdiHourglassEmpty
          class="size-7"
          :class="
            sidebarStore.action === action.timesheet
              ? 'text-[#2F80ED]'
              : 'text-gray-700'
          "
        />
        <span
          class="pl-5 font-medium"
          :class="
            sidebarStore.action === action.timesheet ? 'text-[#2F80ED]' : ''
          "
          >Timesheet</span
        >
      </button>

      <!-- Reports -->
      <button
        class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
        :class="
          sidebarStore.action === action.reports
            ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
            : ''
        "
        @click="sidebarStore.setAction(action.reports)"
      >
        <MdiChatAdd
          class="size-7"
          :class="
            sidebarStore.action === action.reports
              ? 'text-[#2F80ED]'
              : 'text-gray-700'
          "
        />
        <span
          class="pl-5 font-medium"
          :class="
            sidebarStore.action === action.reports ? 'text-[#2F80ED]' : ''
          "
          >Reports</span
        >
      </button>

      <!-- Rooms -->
      <button
        class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
        :class="
          sidebarStore.action === action.rooms
            ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
            : ''
        "
        @click="sidebarStore.setAction(action.rooms)"
      >
        <MdiOfficeBuildingPlus
          class="size-7"
          :class="
            sidebarStore.action === action.rooms
              ? 'text-[#2F80ED]'
              : 'text-gray-700'
          "
        />
        <span
          class="pl-5 font-medium"
          :class="sidebarStore.action === action.rooms ? 'text-[#2F80ED]' : ''"
          >Rooms</span
        >
      </button>

      <!-- Subject -->
      <button
        class="flex min-h-14 items-center rounded-lg pl-3 duration-200 ease-in hover:bg-slate-100"
        :class="
          sidebarStore.action === action.subject
            ? 'bg-gradient-to-tr from-blue-200 to-blue-100'
            : ''
        "
        @click="sidebarStore.setAction(action.subject)"
      >
        <MdiBooks
          class="size-7"
          :class="
            sidebarStore.action === action.subject
              ? 'text-[#2F80ED]'
              : 'text-gray-700'
          "
        />
        <span
          class="pl-5 font-medium"
          :class="
            sidebarStore.action === action.subject ? 'text-[#2F80ED]' : ''
          "
          >Subject</span
        >
      </button>

      <!-- Content here -->
    </div>

    <!--Contact Section -->
    <div
      class="mx-auto mt-[15%] h-[14%] min-h-32 max-w-[calc(100%-2.5rem)] rounded-[20px] bg-gradient-to-r from-fuchsia-300 to-indigo-600"
    >
      <div
        class="py-5 text-center text-sm font-semibold tracking-tight text-white"
      >
        Need some help?
        <br />
        Get help from our experts
      </div>
      <button
        class="ml-10 flex h-8 w-3/5 items-center justify-center rounded-[20px] bg-white text-center shadow-sm delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      >
        <div
          class="text-center text-sm font-semibold tracking-tight text-indigo-600"
        >
          Contact Us!
        </div>
      </button>
    </div>
  </div>

  <!-- Profile Section -->
  <div class="mx-auto mb-4 mt-6 flex w-full max-w-[calc(100%-2.5rem)] flex-row">
    <div class="w-fit">
      <img class="w-12 rounded-full" src="/src/assets/image/profile-pic.png" />
    </div>
    <div class="ml-4 flex grow flex-row gap-2">
      <div class="ml-px mt-px flex flex-col justify-between">
        <div class="font-medium tracking-tight">{{ auth.username }}</div>
        <div class="mb-px text-sm font-normal tracking-tight text-neutral-500">
          {{ displayRole(auth.role) }}
        </div>
      </div>
    </div>

    <div
      class="dropdown dropdown-top dropdown-hover flex items-center justify-center text-center align-middle"
    >
      <button
        class="items-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-150"
      >
        <MdiChevronDown class="scale-150 bg-transparent" />
      </button>
      <ul
        tabindex="0"
        class="menu dropdown-content absolute -right-px z-[4] w-44 rounded-box bg-base-100 shadow"
      >
        <li><a>Sign out</a></li>
        <li><a>Profile</a></li>
      </ul>
    </div>
  </div>
</template>
