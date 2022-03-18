<script setup lang="ts">
import { Icon } from "@iconify/vue";
const { t, locale } = useI18n();

const en = () => {
  locale.value = "en";
};

const zh = () => {
  locale.value = "zh-CN";
};
</script>

<template>
  <img class="avatar center" src="src/assets/avatar.jpg" />

  <div class="center link">
    <p>{{ t("first") }}</p>
    <p>{{ t("second") }}</p>
    <Icon class="mr-1" icon="bi:github" :horizontal-flip="true" />
    <a href="https://github.com/qianxi0410" target="_blank">Github</a>
    <div class="mt-3">
      <input id="lang-1" type="radio" name="lang" checked value="en" @click="en" />
      <label for="lang-1">en</label>

      <input id="lang-2" type="radio" name="lang" value="zh-CN" @click="zh" />
      <label for="lang-2">zh-CN</label>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  margin-top: 10rem;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.link {
  display: block;
  margin-top: 2rem;
  color: rgb(75, 75, 144);
  width: 800px;
  height: 200px;
}
</style>
