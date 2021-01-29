import { createApp } from 'vue';
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

const app = createApp(App);

const i18n = createI18n({});

app.use(router);
app.use(i18n);
app.use(store);

app.mount('#app');
