import { Quasar } from "quasar";
import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./plugins/i18n";
import { pinia } from "./plugins/pinia";
import { config } from "./plugins/quasar";
import { router } from "./router";

const app = createApp(App);

app.use(pinia);
app.use(i18n);
app.use(router);
app.use(Quasar, config);

app.mount("#app");
