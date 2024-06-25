<script setup lang="ts">
import { action } from '../../constant/pageConstant';
import AppStore from '../../store';
import Sidebar from './sidebar.vue';
import ViewTable from './admin/ViewTable.vue';
import People from './admin/People.vue';
import Project from './admin/Project.vue';
import Calendar from './admin/Calendar.vue';
import Timesheet from './admin/Timesheet.vue';

const sidebarStore = AppStore.sidebar;

defineOptions({
  name: 'HomePage',
});
</script>

<template>
  <div class="flex h-screen flex-row bg-[--dashboard-bg]">
    <!-- Sidebar -->
    <div
      class="relative hidden overflow-y-auto overflow-x-hidden lg:flex lg:w-[260px] lg:shrink-0 lg:flex-col lg:bg-white"
    >
      <Sidebar />
    </div>

    <!-- Parent Div -->
    <div class="relative mr-9 mt-6 flex w-full flex-col">
      <!-- Header -->
      <div class="flex h-fit w-full flex-row-reverse items-center gap-8">
        <Icon name="notifications" />

        <label
          class="input input-bordered flex max-w-[70rem] items-center gap-2"
        >
          <Icon name="search" class="size-6 opacity-70" />
          <input type="text" class="grow" placeholder="Search" />
          <button class="kbd kbd-sm">ctrl + k</button>
        </label>
      </div>

      <!-- Main Content -->
      <div
        class="mb-5 ml-[5%] mr-[4%] mt-20 grow justify-end rounded-2xl bg-white"
      >
        <!--Todo: adjust main content based on sidebar action value type -->
        <!--ex: if table is active, it will show up table. else show other action -->

        <template v-if="sidebarStore.action === action.tables">
          <ViewTable />
        </template>

        <template v-if="sidebarStore.action === action.people">
          <People />
        </template>

        <template v-if="sidebarStore.action === action.project">
          <Project />
        </template>

        <template v-if="sidebarStore.action === action.calendar">
          <Calendar />
        </template>

        <template v-if="sidebarStore.action === action.timesheet">
          <Timesheet />
        </template>
      </div>
    </div>
  </div>
</template>
