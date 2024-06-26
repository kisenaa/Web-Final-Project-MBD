<script setup lang="ts">
import { action, role } from '../../constant/pageConstant';
import AppStore from '../../store';
import Sidebar from './sidebar.vue';
import AdminViewTable from './admin/ViewTable.vue';
import AdminPeople from './admin/People.vue';
import AdminProject from './admin/Project.vue';
import AdminCalendar from './admin/Calendar.vue';
import AdminTimesheet from './admin/Timesheet.vue';
import StudentCalendar from './student/Calendar.vue';
import AssistantTimesheet from './assistant/Timesheet.vue';

const sidebarStore = AppStore.sidebar;
const auth = AppStore.auth;

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

        <!-- Admin -->
        <template v-if="auth.role === role.admin || auth.role === role.guest">
          <template v-if="sidebarStore.action === action.admin_tables">
            <AdminViewTable />
          </template>

          <template v-if="sidebarStore.action === action.admin_people">
            <AdminPeople />
          </template>

          <template v-if="sidebarStore.action === action.admin_project">
            <AdminProject />
          </template>

          <template v-if="sidebarStore.action === action.admin_calendar">
            <AdminCalendar />
          </template>

          <template v-if="sidebarStore.action === action.admin_timesheet">
            <AdminTimesheet />
          </template>
        </template>

        <!-- Student -->
        <template v-if="auth.role === role.student">
          <template v-if="sidebarStore.action === action.student_calendar">
            <StudentCalendar />
          </template>
        </template>

        <!-- Assistant -->
        <template v-if="auth.role === role.asdos">
          <template v-if="sidebarStore.action === action.asdos_timesheet">
            <AssistantTimesheet />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
