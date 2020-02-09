<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";

export default {
  components: {
    "app-header": Header
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
}
</style>
