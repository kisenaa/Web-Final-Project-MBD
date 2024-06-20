import { auth, sidebar } from './store';

const registerStore = () => {
  return {
    sidebar: sidebar(),
    auth: auth(),
  };
};

const AppStore = registerStore();
export default AppStore;
