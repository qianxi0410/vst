import vueI18n from "@intlify/vite-plugin-vue-i18n";
import vue from "@vitejs/plugin-vue";
// eslint-disable-next-line import/order
import * as path from "path";
import unocss from "unocss/vite";
import autoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import icons from "unplugin-icons/vite";
import components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  envDir: "src/env",
  envPrefix: "APP_",
  mode: "development",
  plugins: [
    vue(),
    unocss(),
    components({
      extensions: [".vue"],
      dts: "src/auto-components.d.ts",
      resolvers: [IconsResolver()],
    }),
    autoImport({
      imports: ["vue", "@vueuse/core", "@vueuse/head", "pinia", "vue-router", "vue-i18n"],
      dts: "src/auto-imports.d.ts",
    }),
    vueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "locales/**")],
    }),
    icons({
      autoInstall: true,
    }),
  ],
});
