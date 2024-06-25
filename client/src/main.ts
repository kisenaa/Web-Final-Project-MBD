import { createApp } from 'vue';
// Vue Router
import { createPinia } from 'pinia';
import { router } from './router';

import App from '~/App.vue';
// css
import './styles/index.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
