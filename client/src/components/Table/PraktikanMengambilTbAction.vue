<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { type Row } from '@tanstack/vue-table';
import { PraktikanMengambilKelas } from '../../Interface/interface';
import MaterialSymbolsDeleteOutline from '~icons/material-symbols/delete-outline';
import MaterialSymbolsEditSquareOutline from '~icons/material-symbols/edit-square-outline';
import { deleteData } from '../../services/deleteData';
import AppStore from '../../store';
const props = defineProps<{
  row: Row<PraktikanMengambilKelas>;
}>();

const isPressed = ref(false);
const tableState = AppStore.ViewTableState;

const handleSubmit = async () => {
  const response = await deleteData('praktikan_mengambil_kelas', [
    { props: 'mhs_nrp', value: props.row.getValue('mhs_nrp') },
    { props: 'kelas_kode', value: props.row.getValue('kelas_kode') },
  ]);
  if (response === 200) {
    const newData = tableState.datas.filter(
      (item: any) =>
        !(
          item.kelas_kode === props.row.getValue('kelas_kode') &&
          item.mhs_nrp === props.row.getValue('mhs_nrp')
        )
    );
    tableState.setDatas(newData);
    alert('Successfully deleted !');
  } else {
    alert('Failed to delete ! server error or PK/FK problem');
  }
};
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-2 text-center">
    <!--
    <input
      class="form-check-input"
      type="checkbox"
      :checked="row.getIsSelected()"
      :disabled="!row.getCanSelect()"
      :indeterminate="row.getIsSomeSelected()"
      :value="row.id"
      @change="
        row.getToggleSelectedHandler()($event);
        console.log(row.id);
      "
    />
  -->
    <button class="group rounded bg-orange-400 pb-[0.1rem]">
      <MaterialSymbolsEditSquareOutline
        class="size-6 text-white ease-in-out group-hover:scale-110 group-hover:duration-300"
      />
    </button>
    <button
      class="group rounded bg-red-500 pb-[0.1rem]"
      @click="isPressed = true"
    >
      <MaterialSymbolsDeleteOutline
        class="size-6 text-white group-hover:scale-110 group-hover:duration-300"
      />
    </button>
  </div>
  <div
    id="popup"
    class="absolute left-0 top-0 flex size-full cursor-not-allowed items-center justify-center rounded-lg bg-black/5"
    :class="isPressed === true ? 'block' : 'hidden'"
  ></div>
  <div
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default rounded border bg-white p-4 shadow-lg outline outline-orange-400/80"
    :class="isPressed === true ? 'block' : 'hidden'"
  >
    <p class="text-center">Are you sure you want to delete these data?</p>
    <div class="mt-4 overflow-x-auto">
      <table class="table border border-solid border-[#dddddd]">
        <thead>
          <tr>
            <th class="border border-solid border-[#dddddd]">NRP Mahasiswa</th>
            <th class="border border-solid border-[#dddddd]">Kode Kelas</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border border-solid border-[#dddddd]">
            <td class="border border-solid border-[#dddddd]">
              {{ row.getValue('mhs_nrp') }}
            </td>
            <td class="border border-solid border-[#dddddd]">
              {{ row.getValue('kelas_kode') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-4 flex justify-center gap-4 rounded-sm">
      <button
        id="confirmYes"
        class="rounded-md bg-green-500 px-4 py-2 text-white hover:brightness-90"
        @click="
          handleSubmit();
          isPressed = false;
        "
      >
        Yes
      </button>
      <button
        class="rounded-md bg-red-500 px-4 py-2 text-white hover:brightness-90"
        @click="isPressed = false"
      >
        No
      </button>
    </div>
  </div>
</template>
