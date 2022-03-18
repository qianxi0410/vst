import "uno.css";
import { createApp } from "vue";
import App from "./App.vue";
import { head } from "./plugins/head";
import { i18n } from "./plugins/i18n";
import "./plugins/nprogress";
import { pinia } from "./plugins/pinia";
import { router } from "./router";

const app = createApp(App);

app.use(pinia);
app.use(head);
app.use(i18n);
app.use(router);

app.mount("#app");
