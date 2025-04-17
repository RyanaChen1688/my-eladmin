<template>
  <div id="app">
    <component :is="comp" />
  </div>
</template>

<script>
import MyLayOut from "./components/layout/MyLayOut.vue";
export default {
  name: "App",
  components: { MyLayOut },
  computed: {
    comp() {
      return this.$route.name === "login" ? "RouterView" : "MyLayOut";
    },
  },
};
</script>

<style>
</style>
