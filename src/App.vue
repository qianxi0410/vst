<script setup lang="ts">
useMeta({
  title: "My App",
  meta: {
    equiv: {
      "http-equiv": "Content-Type",
      content: "text/html; charset=UTF-8",
    },
    noscript: {
      default: "This is content for browsers with no JS (or disabled JS)",
    },
  },
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
