import { createApp } from "vue";
import { key, store } from "./store";
import MainLayout from "./layouts/MainLayout.vue";
import router from "./router";

const app = createApp(MainLayout);

app.use(store, key);

app.use(router);

app.mount("#app");
