<script setup lang="ts">
useHead({
  title: `${import.meta.env.APP_TITLE}`,
  meta: [{ name: "description", content: "Vue App Stater" }],
});
</script>

<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: "Fira Code";
  src: "https://fonts.googleapis.com/css?family=Fira+Code&display=swap";
}
</style>
