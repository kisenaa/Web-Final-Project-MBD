<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MdiChevronDown from '~icons/mdi/chevron-down';
import AppStore from '../../store';
import { role } from '../../constant/pageConstant';
import AdminContent from './admin/Content.vue';
import StudentContent from './student/Content.vue';
import AsdosContent from './assistant/Content.vue';

const auth = AppStore.auth;
const router = useRouter()

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
      <template v-if="auth.role == role.admin || auth.role == role.guest">
        <AdminContent />
      </template>

      <template v-if="auth.role == role.student">
        <StudentContent />
      </template>

      <template v-if="auth.role == role.asdos">
        <AsdosContent />
      </template>

      <!-- Content here -->
    </div>

    <!--Contact Section -->
    <div
      class="mx-auto mt-[30%] h-[14%] min-h-32 max-w-[calc(100%-2.5rem)] rounded-[20px] bg-gradient-to-r from-fuchsia-300 to-indigo-600"
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
      <li><button @click="() => { auth.ResetAuth(); router.push('login'); }">Sign out</button></li>
      <li><a>Profile</a></li>
      </ul>
    </div>
  </div>
</template>
