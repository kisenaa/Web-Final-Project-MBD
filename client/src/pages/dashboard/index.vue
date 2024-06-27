<script setup lang="ts">
import { action, role } from '../../constant/pageConstant';
import AppStore from '../../store';
import Sidebar from './sidebar.vue';
import AdminViewTable from './admin/ViewTable.vue';
import AdminPeople from './admin/People.vue';
import AdminProject from './admin/Project.vue';
import AdminCalendar from './admin/Calendar.vue';
import AdminSubject from './admin/Subject.vue';
import AdminAsdos from './admin/Asdos.vue';
import AdminPracticum from './admin/Practicum.vue';
import StudentCalendar from './student/Calendar.vue';
import StudentClass from './student/Class.vue';
import AssistantTimesheet from './assistant/Timesheet.vue';
import AdminReport from './admin/Reports.vue'

const sidebarStore = AppStore.sidebar;
const auth = AppStore.auth;
const ViewTable = AppStore.ViewTableState;

defineOptions({
  name: 'HomePage',
});

onMounted(() => {
  if (auth.role === role.student) {
    if (
      sidebarStore.action !== action.student_class &&
      sidebarStore.action !== action.student_calendar
    ) {
      sidebarStore.setAction(action.student_calendar);
    }
  }
  else if (auth.role === role.asdos) {
    if(sidebarStore.action !== action.asdos_timesheet) {
      sidebarStore.setAction(action.asdos_timesheet);
    }
  }
  else if (auth.role === role.admin) {
    if(sidebarStore.action === action.asdos_timesheet || sidebarStore.action === action.student_class || sidebarStore.action === action.student_calendar) {
      sidebarStore.setAction(action.admin_tables) ;
    }
  }
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
    <div class="relative mr-9 mt-6 flex w-full flex-col overflow-y-auto">
      <!-- Header -->
      <div class="flex h-fit w-full flex-row-reverse items-center gap-8">
        <Icon name="notifications" />

        <label
          class="input input-bordered mt-1 flex max-w-[70rem] items-center gap-2"
        >
          <Icon name="search" class="size-6 opacity-70" />
          <input
            type="text"
            class="grow"
            placeholder="Search"
            @input="
              (event) =>
                ViewTable.setAction((event.target as HTMLInputElement).value)
            "
          />
          <button class="kbd kbd-sm">ctrl + k</button>
        </label>
      </div>

      <!-- Main Content -->
      <div
        class="mb-5 ml-[5%] mr-[4%] mt-8 grow justify-end rounded-2xl bg-white"
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

          <template v-if="sidebarStore.action === action.admin_asdos">
            <AdminAsdos />
          </template>

          <template v-if="sidebarStore.action === action.admin_calendar">
            <AdminCalendar />
          </template>

          <template v-if="sidebarStore.action === action.admin_addPracticum">
            <AdminPracticum />
          </template>

          <template v-if="sidebarStore.action === action.admin_subject">
            <AdminSubject />
          </template>

          <template v-if="sidebarStore.action === action.admin_reports">
            <AdminReport />
          </template>
        </template>

        <!-- Student -->
        <template v-if="auth.role === role.student">
          <template v-if="sidebarStore.action === action.student_calendar">
            <StudentCalendar />
          </template>

          <template v-if="sidebarStore.action === action.student_class">
            <StudentClass />
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
