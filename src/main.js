import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import dayjs from 'dayjs';

import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';

const app = createApp(App);
app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$message = message;
app.use(router);
app.use(store);
app.mount('#app');
