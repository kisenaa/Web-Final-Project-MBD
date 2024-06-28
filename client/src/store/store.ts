/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia';
import { action, role } from '../constant/pageConstant';
import { IAuth } from '../Interface/interface';
import { an } from 'vitest/dist/reporters-yx5ZTtEV';

// Auth data
export const auth = defineStore('auth', {
  state: () => {
    return {
      username: 'Guest',
      role: role.guest as role,
      nrp: '',
    };
  },
  actions: {
    setAuth(auth: Partial<IAuth>) {
      Object.assign(this.$state, auth);
    },
    ResetAuth() {
     this.username = 'Guest';
     this.role = role.guest;
     this.nrp = ''
    }
  },
  persist: true
});

// Sidebar data
export const sidebar = defineStore('sidebar', {
  state: () => {
    return {
      action: action.admin_tables as action,
    };
  },
  getters: {
    getAction: (state) => {
      return state.action;
    },
  },
  actions: {
    setAction(value: action) {
      this.action = value;
    },
  },
  persist: true
});


// table
export const ViewTableState = defineStore('ViewTableState', {
  state: () => {
    return {
      filter_query: '',
      datas:[],
    };
  },
  actions: {
    setAction(value: string) {
      this.filter_query = value;
    },
    setDatas(value: unknown[]) {
      this.datas = value as any
    }
  },
});