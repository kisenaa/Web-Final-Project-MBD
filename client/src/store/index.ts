import { auth, sidebar, ViewTableState } from './store';

const registerStore = () => {
  return {
    sidebar: sidebar(),
    auth: auth(),
    ViewTableState: ViewTableState()
  };
};

const AppStore = registerStore();
export default AppStore;
