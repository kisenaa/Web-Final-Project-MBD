<!-- eslint-disable no-console -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MdiStudent from '~icons/mdi/account-student';
import MdiPersonStar from '~icons/mdi/person-star';
import MdiShieldPerson from '~icons/mdi/shield-person';
import { role } from '../../constant/pageConstant';
import { assistantTable, studentTable } from '../../constant/db';
import AppStore from '../../store';

const router = useRouter();

const nrp = ref<string | null>('');
const password = ref<string | null>('');
const roles = ref<role>(role.student);

const auth = AppStore.auth


const handleLogin = async () => {
  if(roles.value === role.admin || roles.value === role.guest) {
    auth.setAuth({nrp:'admin', username:'Admin', role:role.admin})
    navigate();
  }

  const table = roles.value === role.student ? studentTable.table : assistantTable.table
  const pk = roles.value === role.student ? studentTable.mhsnrp : assistantTable.asdoskode
  const name = roles.value === role.student ? studentTable.nama : assistantTable.nama

  try {
        const response = await fetch('http://localhost:5000/run-query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: `SELECT ${pk},${name} FROM ${table} WHERE ${pk} = '${nrp.value}' LIMIT 1`})
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result)

        if(roles.value === role.student) {
          if(result[0].mhs_nrp === password.value) {
            auth.setAuth({nrp:nrp.value!, role:roles.value, username:result[0].mhs_nama})
            navigate()
          } 
        } else if (roles.value === role.asdos) {
          if(result[0].asdos_kode === password.value) {
            auth.setAuth({nrp:nrp.value!, role:roles.value, username:result[0].asdos_nama})
            navigate()
          }
      }
      console.log("WRONG ID OR PASSWORD")
      } catch (err) {
       console.log(err)
      }
}

const navigate = () => {
  router.push('dashboard');
};
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
            @change="
              (event) => (nrp = (event.target as HTMLInputElement).value)
            "
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
            @change="
              (event) => (password = (event.target as HTMLInputElement).value)
            "
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
            :class="roles === role.student ? 'bg-pink-400/70' : ''"
            @click="roles = role.student"
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
            :class="roles === role.asdos ? 'bg-orange-400/70' : ''"
            @click="roles = role.asdos"
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
            :class="roles === role.admin ? 'bg-teal-400/80' : ''"
            @click="roles = role.admin"
          >
            <MdiShieldPerson
              name="password"
              class="size-8 transition duration-300 ease-in-out group-hover:scale-110"
            />
          </button>
        </div>

        <button
          class="my-4 w-full rounded-lg bg-blue-600 py-3 text-center text-white shadow-xl hover:brightness-90"
          @click="async() => handleLogin()"
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
