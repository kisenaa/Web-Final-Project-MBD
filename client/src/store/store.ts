import { defineStore } from 'pinia';
import { action, role } from '../constant/pageConstant';
import { IAuth } from '../Interface/interface';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

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
    
  },
  persist: true
});
