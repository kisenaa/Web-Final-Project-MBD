import { defineStore } from 'pinia';
import { action, role } from '../constant/pageConstant';
import { IAuth } from '../Interface/interface';

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
});

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
    loadState() {
      const savedState = localStorage.getItem('auth');
      if (savedState) {
        Object.assign(this.$state, JSON.parse(savedState));
      }
    },
    saveState() {
      localStorage.setItem('auth', JSON.stringify(this.$state));
    },
  },
});
