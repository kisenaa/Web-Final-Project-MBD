<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MdiStudent from '~icons/mdi/account-student';
import MdiPersonStar from '~icons/mdi/person-star';
import MdiShieldPerson from '~icons/mdi/shield-person';
</script>

<template>
  <div class="w-full px-2 2xl:px-4">
    <div class="flex flex-col px-1">
      <div class="mx-auto flex flex-row items-center gap-5">
        <div>
          <Icon name="front-logo" class="size-16" />
        </div>
        <div
          class="pl-2 text-lg font-semibold text-indigo-900 lg:text-xl xl:text-2xl"
        >
          Practicum Management <br />
          System
        </div>
      </div>

      <div class="mt-8 text-center font-bold text-neutral-600">
        Login into your account
      </div>

      <div class="mt-14 flex flex-col gap-3 text-neutral-700">
        <span>Email Address</span>
        <div
          class="input input-md mb-1 flex w-full items-center rounded-lg bg-gray-100 px-0 focus-within:outline-sky-300"
        >
          <input
            type="text"
            class="input grow rounded-lg pl-4"
            placeholder="Enter your email"
          />
          <div
            class="relative mr-auto flex size-[3.1rem] items-center justify-center rounded-lg bg-blue-600"
          >
            <Icon name="email" class="size-8 fill-white" />
          </div>
        </div>

        <span>Password</span>
        <div
          class="input input-md flex w-full items-center rounded-lg bg-gray-100 px-0 focus-within:outline-sky-300"
        >
          <input
            type="text"
            class="input grow rounded-lg pl-4"
            placeholder="Enter your password"
          />
          <div
            class="relative mr-auto flex size-[3.1rem] items-center justify-center rounded-lg bg-blue-600"
          >
            <Icon name="password" class="size-8 fill-white" />
          </div>
        </div>

        <button
          class="mb-2 ml-auto text-nowrap text-sm text-indigo-900 underline"
        >
          Forgot Password ?
        </button>

        <div
          class="my-1 flex items-center justify-between rounded-lg border-2 border-solid border-indigo-600"
        >
          <!-- Student Button -->
          <button
            class="group tooltip tooltip-secondary flex w-1/3 justify-center rounded-l-md border-y-0 border-l-0 border-r border-solid border-purple-600 p-3 transition duration-300 ease-in-out hover:bg-pink-400/70"
            data-tip="Student"
          >
            <MdiStudent
              name="password"
              class="size-8 transition duration-300 ease-in-out group-hover:scale-110"
            />
          </button>

          <!-- Assistant Button -->
          <button
            class="group tooltip tooltip-accent flex w-1/3 justify-center border-y-0 border-l-0 border-r border-solid border-purple-600 p-3 transition duration-300 ease-in-out hover:bg-orange-400/70"
            data-tip="Assistant"
          >
            <MdiPersonStar
              name="password"
              class="size-8 transition duration-300 ease-in-out group-hover:scale-110"
            />
          </button>
          <!-- Admin Button -->

          <button
            class="group tooltip tooltip-primary flex w-1/3 justify-center rounded-r-md p-3 transition duration-300 ease-in-out hover:bg-teal-400/80 hover:outline-none"
            data-tip="Admin"
          >
            <MdiShieldPerson
              name="password"
              class="size-8 transition duration-300 ease-in-out group-hover:scale-110"
            />
          </button>
        </div>

        <button
          class="my-4 w-full rounded-lg bg-blue-600 py-3 text-center text-white shadow-xl hover:brightness-90"
        >
          Login Now
        </button>
      </div>

      <div class="mx-auto my-4 flex items-center 2xl:w-[28rem]">
        <div class="grow border border-solid border-stone-300"></div>
        <span class="mx-4 text-stone-500">OR</span>
        <div class="grow border border-solid border-stone-300"></div>
      </div>
      <button
        class="my-4 w-full cursor-not-allowed rounded-lg border-2 border-solid border-cyan-600 py-3 text-center font-semibold text-blue-600 hover:bg-slate-100/40 hover:shadow-inner"
      >
        Register New Account
      </button>
    </div>
  </div>
</template>
