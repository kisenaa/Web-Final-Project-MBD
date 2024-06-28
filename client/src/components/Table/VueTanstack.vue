<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue';
import CustomFilter from './CustomFilter.vue'; // Import the custom filter component

const props = defineProps({
  data: Array,
  columns: Array,
});

import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/vue-table';
import AppStore from '../../store';

//store
const tableStore = AppStore.ViewTableState;
const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);

const table = useVueTable({
  get data() {
    return props.data as any;
  },
  columns: props.columns as any,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get sorting() {
      return sorting.value;
    },
    get globalFilter() {
      return tableStore.filter_query;
    },
    get columnFilters() {
      return columnFilters.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === 'function'
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  onColumnFiltersChange: (updaterOrValue) => {
    columnFilters.value =
      typeof updaterOrValue === 'function'
        ? updaterOrValue(columnFilters.value)
        : updaterOrValue;
  },
  initialState: {
    pagination: {
      pageSize: 10,
    },
  },
});
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 items-center overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr
                v-for="headerGroup in table.getHeaderGroups()"
                :key="headerGroup.id"
              >
                <th
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  scope="col"
                  class="px-2 py-3 text-left text-base font-bold text-gray-500"
                  :class="{
                    'cursor-pointer select-none': header.column.getCanSort(),
                  }"
                >
                  <div
                    class="flex items-center space-x-2"
                    :class="
                      header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : ''
                    "
                    @click="header.column.getToggleSortingHandler()?.($event)"
                  >
                    <FlexRender
                      :render="header.column.columnDef.header"
                      :props="header.getContext()"
                    />
                    {{
                      header.column.getIsSorted()
                        ? { asc: '↑', desc: '↓' }[
                            header.column.getIsSorted() as 'asc' | 'desc'
                          ]
                        : ''
                    }}
                  </div>
                  <!-- Add Custom Filter Component -->
                  <template
                    v-if="!header.isPlaceholder && header.column.getCanFilter()"
                  >
                    <CustomFilter :column="header.column" :table="table" />
                  </template>
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="row in table.getRowModel().rows"
                :key="row.id"
                class="border-0 border-t border-solid border-blue-900"
              >
                <td
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                  :class="{ 'bg-gray-200': Number(row.id) % 2 === 1 }"
                  class="border border-solid border-[#dddddd] px-2 py-3 text-black"
                >
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mt-8">
        Page {{ table.getState().pagination.pageIndex + 1 }} of
        {{ table.getPageCount() }} -
        {{ table.getFilteredRowModel().rows.length }} results
      </div>
      <div class="mt-8 space-x-4">
        <div class="join grid grid-cols-4">
          <button
            class="btn btn-outline join-item"
            @click="table.setPageIndex(0)"
          >
            First page
          </button>
          <button
            class="btn btn-outline join-item"
            @click="table.setPageIndex(table.getPageCount() - 1)"
          >
            Last page
          </button>

          <button
            class="btn btn-outline join-item"
            :disabled="!table.getCanPreviousPage()"
            @click="table.previousPage()"
          >
            Previous page
          </button>
          <button
            class="btn btn-outline join-item"
            :disabled="!table.getCanNextPage()"
            @click="table.nextPage()"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
