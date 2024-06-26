import { createApp } from 'vue';
// Vue Router
import { createPinia } from 'pinia';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { router } from './router';

import App from '~/App.vue';
// css
import './styles/index.css';


const app = createApp(App);
const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

app.use(pinia);
app.use(router);
app.mount('#app');
